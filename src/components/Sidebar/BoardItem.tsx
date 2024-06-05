/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Sidebar.module.css';
import Icon from '../utils/Icon';

const {
  boardName,
  boardItem,
  titleWrapper,
  iconsWrapper,
  hoverOnIcon,
  boardHoverIcon,
} = css;

interface BoardItemProps {
  title: string;
  id: string;
}

export const BoardItem: FC<BoardItemProps> = ({ title, id }) => {
  const navigate = useNavigate();

  const handleSelectBoard = (event, boardId) => {
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }

    navigate(`/${boardId}`);
    localStorage.setItem('lastBoard', boardId);
  };

  return (
    <li className={boardItem} onClick={event => handleSelectBoard(event, id)}>
      <div className={titleWrapper}>
        <Icon
          name="icon-four-circles"
          width="18px"
          height="18px"
          fill="rgba(22, 22, 22, 0.5)"
          className={boardHoverIcon}
        />
        <p className={boardName}>{title}</p>
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
  );
};
