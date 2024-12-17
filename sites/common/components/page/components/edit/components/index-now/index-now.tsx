import React from 'react';
import { Button } from './components/button/button';
import { useData } from '../../../../../../../src copy/sites/shared/app/functions/store/use-data';

interface IndexNowInterface {
  (): React.ReactElement;
}

export const IndexNow: IndexNowInterface = () => {
  const { indexNowPingedAt } = useData();

  return (
    <div className="index-now">
      <div className="pinged-at">{indexNowPingedAt}</div>
      <Button />
    </div>
  );
};
