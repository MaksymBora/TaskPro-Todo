import { FC } from 'react';
import css from './Sidebar.module.css';
import Icon from '../utils/Icon';

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
} = css;

export const Sidebar: FC = () => {
  return (
    <div className={sidebarContainer}>
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

      <div>
        <p>img</p>
        <p>
          If you need help with <span>TaskPro</span>, check out our support
          resources or reach out to our customer support team.
        </p>
        <div>
          <p>i</p>
          <p>Need help?</p>
        </div>
      </div>

      <div>
        <button type="button">Log out</button>
      </div>
    </div>
  );
};
