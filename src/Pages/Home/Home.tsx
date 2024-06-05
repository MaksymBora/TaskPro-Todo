import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Filter from '@/components/Filter/Filter';
import css from './Home.module.css';
import Icon from '@/components/utils/Icon';
import { AddCardModal } from '@/components/Modals/AddCard/AddCardModal';
import { AddColumn } from '@/components/Modals/AddColumn/AddColumn';
import { useBoard } from '@/hooks/useBoard';
import { useAuth } from '@/hooks/useAuth';
import { AppDispatch } from '@/redux/store';
import { fetchBoardById } from '@/redux/dashboard/boardOperation';

const Home: FC = () => {
  const [modalAddCardIsOpen, setModalAddCardIsOpen] = useState<boolean>(false);
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const { boardId } = useParams<{ boardId: string }>();
  const { currentBoards } = useBoard();
  const { isLoggedIn } = useAuth();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const boardFromLS = localStorage.getItem('lastBoard');
    if (!boardFromLS) return;

    if (boardFromLS === boardId) return;

    navigate(`/${boardFromLS}`);
  }, [boardId, navigate]);

  useEffect(() => {
    if (!boardId) return;

    if (!isLoggedIn) return;

    dispatch(fetchBoardById(boardId));

    // dispatch(fetchColumnsByBoardId(boardId));
    // dispatch(fetchCards(boardId));
  }, [boardId, dispatch, isLoggedIn]);

  const baseUrlDesktop =
    'https://res.cloudinary.com/dejz1vvem/image/upload/v1717610473/todo/desktop/';

  const baseUrlTablet =
    'https://res.cloudinary.com/dejz1vvem/image/upload/v1717616044/todo/tablet/';
  const baseUrlMobile =
    'https://res.cloudinary.com/dejz1vvem/image/upload/v1717616407/todo/mobile/';

  return (
    <div className={css.container}>
      <div className={css.projectNav}>
        <p className={css.projectName}>{currentBoards?.boardTitle}</p>
        <Filter />
      </div>
      <div className={css.todoColumnsWrapper}>
        <ul className={css.columnsList}>
          {/* COLUMN 1 */}
          <li className={css.coulmnsItem}>
            <div className={css.columnTitleWrapper}>
              <h2 className={css.columnTitle}>To Do</h2>
              <div className={css.columnBtnsControlWrapper}>
                <button type="button" className={css.columnBtnsControl}>
                  <Icon
                    name="icon-pencil"
                    width="16px"
                    height="16px"
                    fill="gray"
                    className={css.hoverOnIcon}
                  />
                </button>
                <button type="button" className={css.columnBtnsControl}>
                  <Icon
                    name="icon-trash"
                    width="16px"
                    height="16px"
                    fill="gray"
                    className={css.hoverOnIcon}
                  />
                </button>
              </div>
            </div>

            {/* TODO CARD */}
            <ul className={css.todoCardsList}>
              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items1</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items2</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items3</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <button
              type="button"
              className={css.addCardBtn}
              onClick={() => {
                setModalAddCardIsOpen(prevState => !prevState);
              }}
            >
              <Icon
                name="icon-plus"
                width="14px"
                height="14px"
                fill="#ffffff"
                className={css.addColumnIcon}
              />{' '}
              Add another card
            </button>
          </li>

          {/* COLUMN 2 */}
          <li className={css.coulmnsItem}>
            <div className={css.columnTitleWrapper}>
              <h2 className={css.columnTitle}>In Progress</h2>
              <div className={css.columnBtnsControlWrapper}>
                <button type="button" className={css.columnBtnsControl}>
                  <Icon
                    name="icon-pencil"
                    width="16px"
                    height="16px"
                    fill="gray"
                    className={css.hoverOnIcon}
                  />
                </button>
                <button type="button" className={css.columnBtnsControl}>
                  <Icon
                    name="icon-trash"
                    width="16px"
                    height="16px"
                    fill="gray"
                    className={css.hoverOnIcon}
                  />
                </button>
              </div>
            </div>

            <ul className={css.todoCardsList}>
              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>

              <li className={`${css.todoCard}`}>
                <div className={css.cardContentWrapper}>
                  <h4 className={css.todoTitle}>Order items</h4>
                  <p className={css.todoScope}>Get order as per list</p>
                </div>

                <div className={css.todoInfoWrapper}>
                  <div className={css.priority}>
                    <h5 className={css.priorityTitle}>Priority</h5>
                    <div className={css.priorityWrapper}>
                      <div className={css.priorityColor} />
                      <p className={css.priorityType}>Low</p>
                    </div>
                  </div>

                  <div>
                    <h5 className={css.deadlineTitle}>Deadline</h5>
                    <p className={css.deadlineDate}>05/05/2024</p>
                  </div>

                  <ul className={css.todosButtonsList}>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-arrow-circle"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-pencil"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                    <li className={css.todosButtonItem}>
                      <button type="button" className={css.todoActionBtn}>
                        <Icon
                          name="icon-trash"
                          width="16px"
                          height="16px"
                          fill="gray"
                          className={css.hoverOnIcon}
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <button type="button" className={css.addCardBtn}>
              <Icon
                name="icon-plus"
                width="14px"
                height="14px"
                fill="#ffffff"
                className={css.addColumnIcon}
              />{' '}
              Add another card
            </button>
          </li>
          <button
            type="button"
            className={css.createColumnBtn}
            onClick={() => {
              setModalAddColumnIsOpen(prevState => !prevState);
            }}
          >
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

      <AddCardModal
        modalIsOpen={modalAddCardIsOpen}
        setModalIsOpen={setModalAddCardIsOpen}
      />

      <AddColumn
        modalIsOpen={modalAddColumnIsOpen}
        setModalIsOpen={setModalAddColumnIsOpen}
      />

      <style>
        {`
         @media screen and (max-width: 767px) {
          .${css.container} {
            background-image: url('${baseUrlMobile}${currentBoards?.bgImage}.webp');
          }
        }
        @media screen and (min-width: 768px) {
          .${css.container} {
            background-image: url('${baseUrlTablet}${currentBoards?.bgImage}.webp');
          }
        }
        @media screen and (min-width: 1440px) {
          .${css.container} {
            background-image: url('${baseUrlDesktop}${currentBoards?.bgImage}.webp');
          }
        }
      `}
      </style>
    </div>
  );
};

export default Home;
