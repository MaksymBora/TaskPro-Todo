import Icon from '../utils/Icon';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* <div>Logo</div> */}

        <div className={css.iconMenu}>
          <Icon name="icon-burger" width="24px" height="24px" fill="#161616" />
        </div>

        <nav className={css.nav}>
          <form className={css.themeForm}>
            <label htmlFor="theme-select" className={css.selectLabel}>
              Theme select
            </label>

            <select name="theme" id="theme-select" className={css.themeSelect}>
              <option selected>Theme</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </form>

          <p className={css.userName}>Maks</p>

          <div className={css.avatar}>
            <Icon
              name="icon-user"
              width="32px"
              height="32px"
              style={{ borderRadius: '8px' }}
            />
            <label htmlFor="avatarInput" className={css.labelAvatar}>
              {/* <Icon name="icon-add" width="10px" height="10px" fill="#000000" /> */}
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
