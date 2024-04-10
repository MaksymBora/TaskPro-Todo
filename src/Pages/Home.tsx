import { useState } from 'react';
import Filter from '@/components/Filter/Filter';
import css from './Home.module.css';
import Icon from '@/components/utils/Icon';
import { NewBoardModal } from '@/components/Modals/NewBoardModal/NewBoradModal';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <div className={css.container}>
      <div className={css.projectNav}>
        <p className={css.projectName}>Project office</p>
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

      <NewBoardModal
        modalIsOpen={modalIsOpen}
        handleCloseModal={() => setModalIsOpen(false)}
      />

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
