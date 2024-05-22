import { nanoid } from '@reduxjs/toolkit';
import { FC, useState } from 'react';
import { Field } from 'formik';
import css from './RadioInputs.module.css';

interface RadioInputsPropTypes {
  defaultValue: string;

  onPriorityChange: (isOpen: boolean) => void;
}

export const RadioInputs: FC<RadioInputsPropTypes> = ({
  defaultValue,
  onPriorityChange,
}) => {
  const list = ['low', 'medium', 'high', 'without'];
  const [currValue, setCurrValue] = useState(defaultValue);

  const handleInput = ({ target: { value } }) => {
    onPriorityChange(value);
    setCurrValue(value);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return '#8fa1d0';
      case 'medium':
        return '#bedbb0';
      case 'high':
        return '#e09cb5';
      case 'without':
        return 'rgba(22, 22, 22, 0.3)';
      default:
        return 'transparent';
    }
  };

  return (
    <div
      className={css.StyledRadioGroup}
      role="group"
      aria-labelledby="my-radio-group"
    >
      {list.map(item => (
        <label
          htmlFor={item}
          key={nanoid()}
          className={`${css.RadioLabel} ${
            css.currValue === item ? 'checked' : ''
          }`}
          style={{ backgroundColor: getPriorityColor(item) }}
        >
          <Field
            id={item}
            type="radio"
            name="priority"
            value={item}
            checked={currValue === item}
            onChange={handleInput}
            className={css.RadioButton}
          />
        </label>
      ))}
    </div>
  );
};
