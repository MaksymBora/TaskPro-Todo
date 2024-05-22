import { nanoid } from '@reduxjs/toolkit';
import { ChangeEvent, FC, useState } from 'react';
import { Field } from 'formik';
import css from './RadioInputs.module.css';

interface RadioInputsPropTypes {
  defaultValue: PriorityType;
  onPriorityChange: (priority: PriorityType) => void;
}

type PriorityType = 'low' | 'medium' | 'high' | 'without';

export const RadioInputs: FC<RadioInputsPropTypes> = ({
  defaultValue,
  onPriorityChange,
}) => {
  const list: PriorityType[] = ['low', 'medium', 'high', 'without'];
  const [currValue, setCurrValue] = useState<PriorityType>(defaultValue);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onPriorityChange(value as PriorityType);
    setCurrValue(value as PriorityType);
  };

  const getPriorityColor = (priority: PriorityType): string => {
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
      className={css.styledRadioGroup}
      role="group"
      aria-labelledby="my-radio-group"
    >
      {list.map(item => (
        <label
          htmlFor={item}
          key={nanoid()}
          className={`${css.radioLabel} ${
            currValue === item ? css.checked : ''
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
            className={css.radioButton}
          />
        </label>
      ))}
    </div>
  );
};
