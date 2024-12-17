import React from 'react';
import loadable from '@loadable/component';
import { ShowAvailabilityDate } from './components/show-availability-date/show-availability-date.checkbox';
const Calendar = loadable(
  () => import('../../../../../../../../common/components/calendar/calendar'),
  { ssr: false },
);
import useStyles from 'isomorphic-style-loader-react18/useStyles';
import styles from './styles/styles.scss';
import { useInputs } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';

export const AvailabilityDate = () => {
  useStyles(styles);

  const { showAvailabilityDate } = useInputs();

  return (
    <div className="availability-date">
      <ShowAvailabilityDate />
      {showAvailabilityDate && <Calendar />}
    </div>
  );
};
