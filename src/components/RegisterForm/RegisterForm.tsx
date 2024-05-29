/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink, useParams } from 'react-router-dom';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import css from './RegisterForm.module.css';
import Icon from '../utils/Icon';

export const RegisterForm: FC = () => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const { id } = useParams<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    const test = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    console.log('Reg Data: >>>', test);
    reset();
  };

  return (
    <div className={css.registerContainer}>
      <form className={css.formRegister} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.wrapperRegNav}>
          <NavLink
            to="/auth/register"
            className={`${css.navLink} ${id === 'register' && css.accent}`}
          >
            Registration
          </NavLink>
          <NavLink to="/auth/login" className={css.navLink}>
            Login
          </NavLink>
        </div>

        {/* NAME */}
        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            placeholder="Enter your name"
            {...register('name', {
              required: 'Required field',
              minLength: {
                value: 2,
                message: 'Name is too short',
              },
            })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />

          {errors.name?.type === 'required' && (
            <p role="alert" className={css.errorRegistrationMessage}>
              Name is Required
            </p>
          )}
        </label>

        {/* EMAIL */}
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
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p role="alert" className={css.errorRegistrationMessage}>
              Email must include @ and .
            </p>
          )}
        </label>

        {/* PASSWORD */}
        <label className={css.labelStyled}>
          <input
            className={css.regInputStyled}
            autoComplete="off"
            placeholder="Create a password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Required field',
              minLength: {
                value: 8,
                message: 'Password must include minimum 8 characters',
              },
            })}
            aria-invalid={errors.password ? 'true' : 'false'}
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
          {errors.password && (
            <p className={css.errorRegistrationMessage}>
              Password must include minimum 8 characters
            </p>
          )}
        </label>

        <button className={css.btnSubmit} type="submit" disabled={!isValid}>
          Register Now
        </button>
      </form>
    </div>
  );
};
