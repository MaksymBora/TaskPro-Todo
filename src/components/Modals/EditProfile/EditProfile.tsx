import { FC, useState } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Icon from '@/components/utils/Icon';
import css from './EditProfile.module.css';

Modal.setAppElement('#help-modal-root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

interface ModalPropTypes {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '2 chars minimum')
    .max(32, '32 chars maximum')
    .matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/, 'Invalin name ')
    .required('this field is required'),
  email: Yup.string().email('Invalid email').required('this field is required'),
  password: Yup.string()
    .min(8, '8 chars minimum')
    .max(64, '64 chars maximum')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,
      'only latin letters, numbers and symbols'
    )
    .matches(/^\S*$/, 'password must not contain spaces')
    .required('this field is required '),
});

const initialValues = {
  name: 'maksym',
  email: 'maksym@gmail.com',
  password: '',
};

export const EditProfile: FC<ModalPropTypes> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [schema] = useState(EditProfileSchema);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (values, actions) => {
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
        <h4 className={css.title}>Edit Profile</h4>

        <button
          type="button"
          className={css.closeBtn}
          onClick={handleCloseModal}
        >
          <Icon name="icon-x-close" width="18px" height="18px" fill="#161616" />
        </button>

        <h2>Update Avatar</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className={css.styledForm}>
              <label htmlFor="name" className={css.styledLabel}>
                <Field id="name" name="name" className={css.styledInputField} />
                <span className={css.inputErrorMessage}>
                  <ErrorMessage name="name" />
                </span>
              </label>

              <label htmlFor="email">
                <Field id="email" name="email" type="email" />
                <span className={css.inputErrorMessage}>
                  <ErrorMessage name="email" />
                </span>
              </label>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
