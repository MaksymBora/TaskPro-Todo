import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';
import css from './NewBoardModal.module.css';
import Icon from '@/components/utils/Icon';
import { ModalsCreateButton } from '@/components/Global/ModalsCreateButton/ModalsCreateButton';
import { images } from '@/assets/images/modal/allImages';

Modal.setAppElement('#modal-root');

const iconsArray = [
  'icon-four-circles',
  'icon-star',
  'icon-loading',
  'icon-puzzle-piece',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
];

const customStyles = {
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
  setModalIsOpen: (isOpen: boolean) => void;
}

export const NewBoardModal: FC<ModalPropTypes> = ({
  modalIsOpen,
  handleCloseModal,
  setModalIsOpen,
}) => {
  const handleSubmit = (values, actions) => {
    console.log('test submit form', values);

    actions.resetForm();
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="New Board Modal"
        className={css.Modal}
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
                  <label htmlFor={icon} className={css.iconLabel}>
                    <Field
                      className={css.radioIcon}
                      id={icon}
                      type="radio"
                      name="icon"
                      value={icon}
                    />
                    <Icon
                      name={icon}
                      width="18px"
                      height="18px"
                      fill="#161616"
                    />
                  </label>
                </li>
              ))}
            </ul>
            <p className={css.subtitle}>Background</p>

            <ul className={css.imagesList}>
              {Object.values(images).map(image => (
                <li key={image}>
                  <label htmlFor={image} className={css.imagesLabel}>
                    <Field
                      className={css.radioIcon}
                      id={image}
                      type="radio"
                      name="bgImage"
                      value={image}
                    />
                    <div className={css.imageWrapper}>
                      <img src={image} alt="bg img" />
                    </div>
                  </label>
                </li>
              ))}
            </ul>

            <ModalsCreateButton name="Create" />
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
