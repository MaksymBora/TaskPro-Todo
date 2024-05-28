import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import Icon from '@/components/utils/Icon';
import css from './Welcome.module.css';
import userImg from '../../assets/images/mobile/userImg.png';
import userImg2x from '../../assets/images/mobile/userImg@2x.png';
import userImg3x from '../../assets/images/mobile/userImg@3x.png';

const Welcome: FC = () => {
  return (
    <section className={css.WraperWelcomeSection}>
      <div className={css.WraperContentWelcome}>
        <div className={css.ThumbWelcomeImg}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={`${userImg} 1x, ${userImg2x} 2x, ${userImg3x} 3x`}
              width="162px"
              height="162px"
            />
            <img
              src={userImg}
              alt="Welcome img"
              style={{ mixBlendMode: 'multiply' }}
              width="124px"
              height="124px"
            />
          </picture>
        </div>
        <div className={css.LogoStyled}>
          <Icon name="icon-logo" width="40px" height="40px" fill="gray" />
          <p>Task Pro</p>
        </div>
        <p className={css.TextStyledWelcome}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don&apos;t wait, start achieving your goals now!
        </p>
        <div className={css.WrapForNav}>
          <NavLink className={css.StyledNavLink} to="auth/register">
            Registration
          </NavLink>
          <NavLink className={css.StyledNavLink} to="auth/login">
            Log In
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
