import React from 'react';
import { useTexts } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

interface VisibleControllerInterface {
  (props: { activeUntil: string; extend(): void }): React.ReactElement;
}

export const VisibleController: VisibleControllerInterface = (props) => {
  const { activeUntil, extend } = props;

  const {
    activeUntilLabel,
    activeUntilNotApplicableLabel,
    activeUntilExtendButtonLabel,
  } = useTexts();

  if (!activeUntil) {
    return <div>{activeUntilNotApplicableLabel}</div>;
  }

  return (
    <>
      <div>
        {activeUntilLabel} <strong>{activeUntil.slice(0, 10)}</strong>
      </div>
      <button onClick={extend} className="button extend">
        {activeUntilExtendButtonLabel}
      </button>
    </>
  );
};
