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
          <li>
            <div className={css.columnTitle}>
              <h2>To Do</h2>
              <div>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
              </div>
            </div>
            <ul>
              <li>
                <div>
                  <h4>Order items</h4>
                  <p>Get order as per list</p>
                </div>
              </li>
            </ul>
            <button type="button">+ Add card</button>
          </li>
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
