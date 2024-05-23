import { FC, useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import Icon from '../utils/Icon';
import { DropdownMenu } from './ThemeButton';
import css from './Header.module.css';
import { EditProfile } from '../Modals/EditProfile/EditProfile';

const Header: FC = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);
  const [editProfileIsOpen, setEditProfileIsOpen] = useState<boolean>(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <button
          type="button"
          className={css.burgerMenuButton}
          onClick={() => setSidebarIsOpen(prevState => !prevState)}
        >
          <Icon
            name="icon-burger"
            width="24px"
            height="24px"
            fill="#161616"
            className={css.burberMenuIcon}
          />
        </button>

        <Sidebar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />

        <nav className={css.nav}>
          <DropdownMenu />

          <p className={css.userName}>Maks</p>

          <button
            type="button"
            className={css.avatarButton}
            onClick={() => {
              setEditProfileIsOpen(prevState => !prevState);
            }}
          >
            <Icon
              name="icon-user"
              width="32px"
              height="32px"
              style={{ borderRadius: '8px' }}
            />
          </button>

          <EditProfile
            modalIsOpen={editProfileIsOpen}
            setModalIsOpen={setEditProfileIsOpen}
          />

          {/* <div className={css.avatar}>
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
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
