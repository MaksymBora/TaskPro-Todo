import { useState } from 'react';
import Filter from '@/components/Filter/Filter';
import css from './Home.module.css';
import { Sidebar } from '@/components/Sidebar/Sidebar';

function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false);

  return (
    <div className={css.container}>
      {/* <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      /> */}
      <div className={css.projectNav}>
        <p className={css.projectName}>Project office</p>
        <Filter />
      </div>

      {/* <div className={css.defaultBoard}>
        <p className={css.emptyBoardText}>
          Before starting your project, it is essential
          <span className={css.boardCreation}> to create a board</span> to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </div> */}
    </div>
  );
}

export default Home;
