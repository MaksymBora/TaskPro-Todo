import { FC } from 'react';
import Icon from '@/components/utils/Icon';
import css from './Filter.module.css';

const Filter: FC = () => {
  return (
    <button type="button" className={css.filterButton}>
      <Icon
        name="icon-filter"
        width="16px"
        height="16px"
        fill="rgba(22, 22, 22, 0.8)"
      />
      Filters
    </button>
  );
};

export default Filter;
