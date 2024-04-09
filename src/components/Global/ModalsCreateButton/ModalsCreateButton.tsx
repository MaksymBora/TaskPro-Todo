import { FC } from 'react';
import Icon from '@/components/utils/Icon';
import css from './ModalsCreateButton.module.css';

interface ModalsCreateButtonProps {
  name: string;
}

export const ModalsCreateButton: FC<ModalsCreateButtonProps> = ({ name }) => {
  return (
    <button type="submit">
      <Icon
        name="icon-plus"
        width="14px"
        height="14px"
        fill="#ffffff"
        className={css.addIcon}
      />{' '}
      {name}
    </button>
  );
};
