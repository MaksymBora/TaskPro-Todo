import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';
import css from './NewBoardModal.module.css';
import Icon from '@/components/utils/Icon';
import { ModalsCreateButton } from '@/components/Global/ModalsCreateButton/ModalsCreateButton';

Modal.setAppElement('#modal-root');

const iconsArray = ['icon-star-04-1', 'icon-pencil'];

const customStyles = {
  content: {
    padding: '24px',
    border: 'none',
    width: '335px',
    height: '433px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fcfcfc',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

const TitleSchema = Yup.object().shape({
  boardTitle: Yup.string().required('Title is required'),
});

interface ModalPropTypes {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}

export const NewBoardModal: FC<ModalPropTypes> = ({
  modalIsOpen,
  handleCloseModal,
}) => {
  const handleSubmit = (values, actions) => {
    console.log('test submit form', values);

    actions.resetForm();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          type="button"
          className={css.closeBtn}
          onClick={handleCloseModal}
        >
          <Icon name="icon-x-close" width="18px" height="18px" fill="#161616" />
        </button>
        <Formik
          initialValues={{ boardTitle: '' }}
          validationSchema={TitleSchema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <h4 className={css.title}>New Board</h4>
            {/* <label htmlFor="boardTitle">Title</label> */}
            <Field
              className={css.inputField}
              placeholder="Title"
              id="boardTitle"
              name="boardTitle"
              type="text"
              autoFocus
              required
            />
            <span className={css.inputErrorMessage}>
              <ErrorMessage name="boardTitle" />
            </span>
            <p className={css.subtitle}>Icons</p>

            <ul className={css.iconList}>
              {iconsArray.map(icon => (
                <li key={icon}>
                  <label htmlFor={icon}>
                    <Field id={icon} type="radio" name="icon" value={icon} />
                  </label>
                  <Icon
                    name="icon-x-close"
                    width="18px"
                    height="18px"
                    fill="#161616"
                  />
                </li>
              ))}
            </ul>
            <p className={css.subtitle}>Background</p>

            <ModalsCreateButton name="Create" />
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
