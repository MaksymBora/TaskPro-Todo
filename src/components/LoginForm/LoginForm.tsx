/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { NavLink, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './LoginForm.module.css';
import Icon from '../utils/Icon';
import { AppDispatch } from '@/redux/store';
import { loginUser } from '@/redux/auth/authOperation';

interface FormData {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const { id } = useParams<string>();

  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>({ mode: 'onBlur' });

  const onSubmit = (data: FormData) => {
    const credentials = {
      email: data.email,
      password: data.password,
    };

    dispatch(loginUser(credentials));

    reset();
  };

  return (
    <div className={css.loginWrapper}>
      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrapperLoginNav}>
          <NavLink to="/auth/register" className={css.styledNavLink}>
            Registration
          </NavLink>
          <NavLink
            to="/auth/login"
            className={`${css.styledNavLink} ${id === 'login' && css.accent}`}
          >
            Login
          </NavLink>
        </div>

        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            placeholder="Enter your email"
            type="email"
            {...register('email', {
              required: 'Required field',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Email must include @ and .',
              },
            })}
          />
        </label>

        {/* PASSWORD */}
        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            placeholder="Create a password"
            autoComplete="off"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 8,
                message: 'Password must include minimum 8 characters',
              },
            })}
          />
          <i
            className={css.iconStyledEye}
            onClick={() => {
              setPasswordShown(!passwordShown);
            }}
          >
            <Icon
              name="icon-eye"
              width="18px"
              height="18px"
              className={`${css.iconEye} ${passwordShown && css.passShown}
                    }`}
            />
          </i>
        </label>

        <button className={css.btnSubmit} type="submit" disabled={!isValid}>
          Log In Now
        </button>
      </form>
    </div>
  );
};
