/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Sidebar.module.css';
import Icon from '../utils/Icon';
import { useBoard } from '@/hooks/useBoard';

const {
  boardName,
  boardItem,
  titleWrapper,
  iconsWrapper,
  hoverOnIcon,
  boardHoverIcon,
  boardItemSelected,
} = css;

interface BoardItemProps {
  title: string;
  id: string;
}

export const BoardItem: FC<BoardItemProps> = ({ title, id }) => {
  const navigate = useNavigate();
  const { currentBoards } = useBoard();

  const handleSelectBoard = (event, selectedBoardId) => {
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }

    navigate(`/${selectedBoardId}`);
    localStorage.setItem('lastBoard', selectedBoardId);
  };

  return (
    <li
      className={`${boardItem} ${
        currentBoards?.id === id ? boardItemSelected : ''
      }  `}
      onClick={event => handleSelectBoard(event, id)}
    >
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
