/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './Sidebar.module.css';
import Icon from '../utils/Icon';
import flowersImg1x from '../../assets/images/help@x1.png';
import flowersImg2x from '../../assets/images/help@x2.png';
import flowersImg3x from '../../assets/images/help@x3.png';
import { NewBoardModal } from '../Modals/NewBoardModal/NewBoradModal';
import { HelpModal } from '../Modals/HelpModal/HelpModal';
import { AppDispatch } from '@/redux/store';
import { logOut } from '@/redux/auth/authOperation';
import { useBoard } from '@/hooks/useBoard';
import { BoardItem } from './BoardItem';

const {
  sidebarContainer,
  logoWrapper,
  logoName,
  myBoards,
  createBoardWrapper,
  createBoardTitle,
  createBoardButton,
  boardsList,
  helpSection,
  imgFlowers,
  helpInfo,
  textHighlight,
  helpButton,
  logoutButton,
  backdrop,
  isVisible,
} = css;

interface SidebarPropTypes {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (value: boolean) => void;
}

export const Sidebar: FC<SidebarPropTypes> = ({
  sidebarIsOpen = false,
  setSidebarIsOpen,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [helpModalIsOpen, setHelpModalIsOpen] = useState(false);
  const { boards } = useBoard();

  const dispatch = useDispatch<AppDispatch>();

  const handleCloseSidebar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (e.target === e.currentTarget) {
      setSidebarIsOpen(false);
    }
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div
      className={`${sidebarIsOpen && backdrop}`}
      onClick={e => handleCloseSidebar(e)}
    >
      <div className={`${sidebarContainer} ${sidebarIsOpen && isVisible}`}>
        <div className={logoWrapper}>
          <Icon name="icon-logo" width="32px" height="32px" />
          <p className={logoName}>Task Pro</p>
        </div>

        <p className={myBoards}>My boards</p>

        <section className={createBoardWrapper}>
          <h3 className={createBoardTitle}>Create a new board</h3>
          <button
            type="button"
            className={createBoardButton}
            onClick={() => {
              setModalIsOpen(prevState => !prevState);
              if (sidebarIsOpen) setSidebarIsOpen(false);
            }}
          >
            +
          </button>
        </section>

        <ul className={boardsList}>
          {boards.map(item => (
            <BoardItem key={item.id} title={item.boardTitle} id={item.id} />
          ))}
        </ul>

        <section className={helpSection}>
          <img
            className={imgFlowers}
            src={flowersImg1x}
            srcSet={`${flowersImg2x} 2x, ${flowersImg3x} 3x`}
            alt="Flowers"
            width="54px"
          />
          <p className={helpInfo}>
            If you need help with <span className={textHighlight}>TaskPro</span>
            , check out our support resources or reach out to our customer
            support team.
          </p>

          <button
            className={helpButton}
            type="button"
            onClick={() => {
              setHelpModalIsOpen(prevState => !prevState);
              if (sidebarIsOpen) setSidebarIsOpen(false);
            }}
          >
            <Icon name="icon-help-circle" width="20px" height="20px" />
            Need help ?
          </button>
        </section>

        <button className={logoutButton} type="button" onClick={handleLogOut}>
          <Icon name="icon-login" width="32px" height="32px" fill="#bedbb0" />
          Log out
        </button>
      </div>

      {/* New Board Modal */}
      <NewBoardModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={() => setModalIsOpen(false)}
        setModalIsOpen={setModalIsOpen}
      />

      <HelpModal
        modalIsOpen={helpModalIsOpen}
        setModalIsOpen={setHelpModalIsOpen}
      />
    </div>
  );
};
