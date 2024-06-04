import { FC } from 'react';
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
}

export const BoardItem: FC<BoardItemProps> = ({ title }) => {
  return (
    <li className={boardItem}>
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
