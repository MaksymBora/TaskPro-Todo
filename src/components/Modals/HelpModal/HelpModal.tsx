import { FC } from 'react';
import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import css from './HelpModal.module.css';
import Icon from '@/components/utils/Icon';

Modal.setAppElement('#help-modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

const initialValues = {
  email: '',
  comments: '',
};

const HelpBoardSchema = Yup.object().shape({
  email: Yup.string().email().required('This field is required'),
  comments: Yup.string()
    .min(5, `It's can be up to 5 characters long`)
    .required(`This field is required`),
});

interface ModalPropTypes {
  modalIsOpen: boolean;

  setModalIsOpen: (isOpen: boolean) => void;
}

export const HelpModal: FC<ModalPropTypes> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

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
        contentLabel="Need Help Modal"
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
          initialValues={initialValues}
          validationSchema={HelpBoardSchema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <h4 className={css.title}>Need help</h4>

            <Field
              className={css.inputField}
              placeholder="Email address"
              id="email"
              name="email"
              type="email"
              autoFocus
              required
            />
            <span className={css.inputErrorMessage}>
              <ErrorMessage name="email" />
            </span>

            <Field
              className={css.textareaComments}
              as="textarea"
              id="comments"
              name="comments"
              placeholder="Comments"
            />
            <span className={css.textareaErrorMessage}>
              <ErrorMessage name="comments" />
            </span>

            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
