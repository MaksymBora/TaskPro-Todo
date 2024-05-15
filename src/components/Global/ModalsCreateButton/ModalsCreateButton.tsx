import { FC } from 'react';
import Icon from '@/components/utils/Icon';
import css from './ModalsCreateButton.module.css';

interface ModalsCreateButtonProps {
  name: string;
}

export const ModalsCreateButton: FC<ModalsCreateButtonProps> = ({ name }) => {
  return (
    <button className={css.btn} type="submit">
      <div className={css.iconWrapper}>
        <Icon name="icon-plus" width="14px" height="14px" fill="#ffffff" />
      </div>
      {name}
    </button>
  );
};
