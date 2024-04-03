import Filter from '@/components/Filter/Filter';
import css from './Home.module.css';
import Icon from '@/components/utils/Icon';

function Home() {
  return (
    <div className={css.container}>
      <div className={css.projectNav}>
        <p className={css.projectName}>Project office</p>
        <Filter />
      </div>

      <div>
        <ul className={css.columnsList}>
          <button type="button" className={css.createColumnBtn}>
            <Icon
              name="icon-plus"
              width="14px"
              height="14px"
              fill="#ffffff"
              className={css.addColumnIcon}
            />{' '}
            Add another column
          </button>
        </ul>
      </div>

      {/* <div className={css.defaultBoard}>
        <p className={css.emptyBoardText}>
          Before starting your project, it is essential
          <span className={css.boardCreationSpan}> to create a board</span> to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div> */}
    </div>
  );
}

export default Home;
