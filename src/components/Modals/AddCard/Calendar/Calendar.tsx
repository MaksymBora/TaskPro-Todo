import DatePicker from 'react-datepicker';
import { enGB } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './Calendar.css';
import { FC } from 'react';

interface CalendarPropTypes {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const Calendar: FC<CalendarPropTypes> = ({
  selectedDate,
  onDateChange,
}) => {
  const handleDateChange = (date: Date) => {
    onDateChange(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="MMMM d"
      minDate={new Date()}
      locale={enGB}
      weekStartsOn={1}
    />
  );
};
