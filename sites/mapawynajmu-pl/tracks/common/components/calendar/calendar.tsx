import React from 'react';
import ReactCalendar from 'react-calendar/dist/entry.nostyle';
import { parseDate } from '../../../../src copy/sites/mapawynajmu-pl/app/functions/date-parsers';
import { useApp } from '../../../../src copy/sites/shared/app/functions/store/use-app';
import { useInputs } from '../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useDispatch } from 'react-redux';

const Calendar = () => {
  const { lang: locale } = useApp();
  const { availabilityDate } = useInputs();
  const dispatch = useDispatch();
  const setInputs = (value: any) => dispatch({ type: 'inputs', value });
  const onChange = (date: Date) =>
    setInputs({ availabilityDate: parseDate(date) });
  const value = availabilityDate ? new Date(availabilityDate) : null;

  const calendarProps = {
    locale,
    value,
    onChange,
  };

  //@ts-ignore
  return <ReactCalendar {...calendarProps} />;
};

export default Calendar;
