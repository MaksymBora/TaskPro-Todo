import Icon from '../utils/Icon';
import { DropdownMenu } from './DropdownMenu';
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
          {/* <form className={css.themeForm}>
            <label htmlFor="theme-select" className={css.selectLabel}>
              Theme select
            </label>

            <select name="theme" id="theme-select" className={css.themeSelect}>
              <option value="light" defaultChecked>
                Light
              </option>
              <option value="dark">Dark</option>
            </select>
          </form> */}

          {/* <div className={css.themeWrapper}>
            <button type="button" className={css.themeButton}>
              Theme
              <svg
                fill="#161616"
                viewBox="0 0 32 32"
                width="16px"
                height="16px"
              >
                <path
                  stroke="currentColor"
                  d="M16.946 17.867c-0.124 0.125-0.271 0.224-0.434 0.292s-0.337 0.103-0.513 0.103c-0.176 0-0.35-0.035-0.513-0.103s-0.31-0.167-0.434-0.292l-6.107-6.12c-0.124-0.125-0.271-0.224-0.434-0.292s-0.337-0.103-0.513-0.103c-0.176 0-0.35 0.035-0.513 0.103s-0.31 0.167-0.434 0.292c-0.248 0.25-0.388 0.588-0.388 0.94s0.139 0.69 0.388 0.94l6.12 6.12c0.75 0.749 1.767 1.17 2.827 1.17s2.077-0.421 2.827-1.17l6.12-6.12c0.246-0.248 0.385-0.584 0.387-0.933 0.001-0.175-0.033-0.349-0.099-0.512s-0.164-0.31-0.288-0.435c-0.124-0.125-0.272-0.224-0.434-0.292s-0.337-0.103-0.513-0.103c-0.176 0-0.35 0.035-0.513 0.103s-0.31 0.167-0.434 0.292l-6.107 6.12z"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}

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
