import React from 'react';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';

export const UpdateStatus = () => {
  const { updated } = useData();

  const classNames = ['update-status'];
  if (updated === true) classNames.push('ok');
  if (updated === false) classNames.push('error');

  return <div className={classNames.join(' ')} />;
};
