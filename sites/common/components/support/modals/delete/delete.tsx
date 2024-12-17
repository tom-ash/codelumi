import React from 'react';
import { useTexts } from '../../../../../src copy/sites/shared/app/functions/store/use-texts';

interface DeleteModalInterface {
  (props: { onCancel(): void; onConfirm(): void }): React.ReactElement;
}

export const DeleteModal: DeleteModalInterface = (props) => {
  const { onCancel, onConfirm } = props;
  const { areYouSure, cancel, confirm } = useTexts();

  return (
    <div className="delete-modal-container" onClick={onCancel}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="monit">{areYouSure}</div>
        <div className="buttons">
          <div className="cancel-container">
            <button className="cancel" onClick={onCancel}>
              {cancel}
            </button>
          </div>
          <div className="confirm-container">
            <button className="confirm" onClick={onConfirm}>
              {confirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
