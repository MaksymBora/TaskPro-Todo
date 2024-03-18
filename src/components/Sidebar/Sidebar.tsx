/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import css from './Sidebar.module.css';
import Icon from '../utils/Icon';
import flowersImg1x from '../../assets/images/help@x1.png';
import flowersImg2x from '../../assets/images/help@x2.png';
import flowersImg3x from '../../assets/images/help@x3.png';

const {
  sidebarContainer,
  logoWrapper,
  logoName,
  myBoards,
  createBoardWrapper,
  createBoardTitle,
  createBoardButton,
  boardName,
  boardItem,
  boardsList,
  titleWrapper,
  iconsWrapper,
  hoverOnIcon,
  boardHoverIcon,
  helpSection,
  imgFlowers,
  helpInfo,
  textHighlight,
  helpButton,
  logoutButton,
  backdrop,
  isVisible,
} = css;

interface SidebarPropTypes {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (value: boolean) => void;
}

export const Sidebar: FC<SidebarPropTypes> = ({
  sidebarIsOpen,
  setSidebarIsOpen,
}) => {
  const handleCloseSidebar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === e.currentTarget) {
      setSidebarIsOpen(false);
    }
  };

  return (
    <div
      className={`${sidebarIsOpen && backdrop}`}
      onClick={e => handleCloseSidebar(e)}
    >
      <div className={`${sidebarContainer} ${sidebarIsOpen && isVisible}`}>
        <div className={logoWrapper}>
          <Icon name="icon-logo" width="32px" height="32px" />
          <p className={logoName}>Task Pro</p>
        </div>

        <p className={myBoards}>My boards</p>

        <section className={createBoardWrapper}>
          <h3 className={createBoardTitle}>Create a new board</h3>
          <button type="button" className={createBoardButton}>
            +
          </button>
        </section>

        <ul className={boardsList}>
          <li className={boardItem}>
            <div className={titleWrapper}>
              <Icon
                name="icon-four-circles"
                width="18px"
                height="18px"
                fill="rgba(22, 22, 22, 0.5)"
                className={boardHoverIcon}
              />
              <p className={boardName}>Project office</p>
            </div>
            <div className={iconsWrapper}>
              <Icon
                name="icon-pencil"
                width="16px"
                height="16px"
                fill="gray"
                className={hoverOnIcon}
              />
              <Icon
                name="icon-trash"
                width="16px"
                height="16px"
                fill="gray"
                className={hoverOnIcon}
              />
            </div>
          </li>

          <li className={boardItem}>
            <div className={titleWrapper}>
              <Icon
                name="icon-four-circles"
                width="18px"
                height="18px"
                fill="rgba(22, 22, 22, 0.5)"
                className={boardHoverIcon}
              />
              <p className={boardName}>Project office</p>
            </div>
            <div className={iconsWrapper}>
              <Icon
                name="icon-pencil"
                width="16px"
                height="16px"
                fill="gray"
                className={hoverOnIcon}
              />
              <Icon
                name="icon-trash"
                width="16px"
                height="16px"
                fill="gray"
                className={hoverOnIcon}
              />
            </div>
          </li>
        </ul>

        <section className={helpSection}>
          <img
            className={imgFlowers}
            src={flowersImg1x}
            srcSet={`${flowersImg2x} 2x, ${flowersImg3x} 3x`}
            alt="Flowers"
            width="54px"
          />
          <p className={helpInfo}>
            If you need help with <span className={textHighlight}>TaskPro</span>
            , check out our support resources or reach out to our customer
            support team.
          </p>

          <button className={helpButton} type="button">
            <Icon name="icon-help-circle" width="20px" height="20px" />
            Need help ?
          </button>
        </section>

        <button className={logoutButton} type="button">
          <Icon name="icon-login" width="32px" height="32px" fill="#bedbb0" />
          Log out
        </button>
      </div>
    </div>
  );
};
