import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { FC } from 'react';
import Modal from 'react-modal';
import { ModalsCreateButton } from '@/components/Global/ModalsCreateButton/ModalsCreateButton';
import css from './AddColumn.module.css';
import Icon from '@/components/utils/Icon';

Modal.setAppElement('#help-modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

const AddCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, `It's can be up to 3 characters long`)
    .max(100, 'Too Long!')
    .required(`This field is required.`),
});

interface ModalPropTypes {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

interface FormValues {
  title: string;
}

export const AddColumn: FC<ModalPropTypes> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
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
        contentLabel="Add card"
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
          initialValues={{
            title: '',
          }}
          validationSchema={AddCardSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <h4 className={css.title}>Add column</h4>

              <Field
                className={css.inputField}
                placeholder="Title"
                id="title"
                name="title"
                type="text"
                autoFocus
                required
              />
              <span className={css.inputErrorMessage}>
                <ErrorMessage name="title" />
              </span>

              <ModalsCreateButton name="Add" />
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
