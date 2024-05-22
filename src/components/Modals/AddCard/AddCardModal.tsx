import { FC, useState } from 'react';
import Modal from 'react-modal';
import { Formik, Form, ErrorMessage, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import css from './AddCardModal.module.css';
import Icon from '@/components/utils/Icon';
import { ModalsCreateButton } from '@/components/Global/ModalsCreateButton/ModalsCreateButton';
import { RadioInputs } from './RadioInputs/RadioInputs';
import { Calendar } from './Calendar/Calendar';

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
  description: Yup.string()
    .min(10, `It's can be up to 10 characters long`)
    .max(500, 'Too Long!')
    .required(`This field is required.`),
});

interface ModalPropTypes {
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

interface FormValues {
  title: string;
  description: string;
  priority: string;
  deadline: Date;
}

export const AddCardModal: FC<ModalPropTypes> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
            description: '',
            priority: 'without',
            deadline: selectedDate,
          }}
          validationSchema={AddCardSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <h4 className={css.title}>Add card</h4>

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

              <Field
                className={css.textareaComments}
                component="textarea"
                id="description"
                name="description"
                placeholder="Description"
              />
              <span className={css.textareaErrorMessage}>
                <ErrorMessage name="description" />
              </span>

              <p className={css.colorCardRadio}>Label color</p>
              <RadioInputs
                defaultValue="without"
                onPriorityChange={priority => {
                  setFieldValue('priority', priority);
                }}
              />

              <p className={css.deadlineStyle}>Deadline</p>
              <div className={css.calendarContainer}>
                <span className={css.subTitle}> Today, </span>
                <Calendar
                  selectedDate={selectedDate}
                  onDateChange={date => {
                    setSelectedDate(date);
                    setFieldValue('deadline', date);
                  }}
                />
              </div>

              <ModalsCreateButton name="Add" />
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};
