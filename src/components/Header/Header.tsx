import { FC } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import Icon from '../utils/Icon';
import { DropdownMenu } from './DropdownMenu';
import css from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* <div>Logo</div> */}

        <div className={css.iconMenu}>
          <Icon name="icon-burger" width="24px" height="24px" fill="#161616" />
        </div>
        <Sidebar />

        <nav className={css.nav}>
          <DropdownMenu />

          <p className={css.userName}>Maks</p>

          <div className={css.avatar}>
            <Icon
              name="icon-user"
              width="32px"
              height="32px"
              style={{ borderRadius: '8px' }}
            />
            <label htmlFor="avatarInput" className={css.labelAvatar}>
              +
            </label>
            <input
              type="file"
              id="avatarInput"
              className={css.avatarSelect}
              name="avatar"
              onChange={() => console.log('avatar')}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
