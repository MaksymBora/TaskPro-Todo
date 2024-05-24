/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC, useState } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Icon from '@/components/utils/Icon';
import css from './EditProfile.module.css';
import { EditAvatar } from './EditAvatar/EditAvatar';

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
    .matches(/^\S*$/, 'password must not contain spaces'),
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
  const [schema, setSchema] = useState(EditProfileSchema);
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (values, actions) => {
    console.log('test submit form', values);

    actions.resetForm();
    setModalIsOpen(false);
  };

  const setCurrentSchema = evt => {
    if (evt.target.value !== '') {
      setSchema(EditProfileSchema);
    }
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

        <EditAvatar />

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} className={css.styledForm}>
              <label htmlFor="name" className={css.styledLabel}>
                <Field id="name" name="name" className={css.styledInputField} />
                <span className={css.inputErrorMessage}>
                  <ErrorMessage name="name" />
                </span>
              </label>

              <label htmlFor="email" className={css.styledLabel}>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={css.styledInputField}
                />
                <span className={css.inputErrorMessage}>
                  <ErrorMessage name="email" />
                </span>
              </label>

              {/* Password */}
              <label htmlFor="password" className={css.styledLabel}>
                <i
                  className={css.iconStyledEye}
                  onClick={() => {
                    setPasswordShown(!passwordShown);
                  }}
                >
                  <Icon
                    name="icon-eye"
                    width="18px"
                    height="18px"
                    fill="#161616"
                    className={`${css.iconEye} ${
                      passwordShown ? css.passShown : css.passHidden
                    }
                    }`}
                  />
                </i>
                <Field
                  onChange={evt => {
                    setFieldValue('password', evt.target.value);
                    setCurrentSchema(evt);
                  }}
                  id="password"
                  name="password"
                  className={css.styledInputField}
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Enter or update your password"
                  autoComplete="off"
                />
                <span className={css.inputErrorMessage}>
                  <ErrorMessage name="password" />
                </span>
              </label>

              <button type="submit" className={css.btn}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
