import React from 'react';
import { FloatClear } from '../../../../../../../../../../common/components/support/float-clear/float-clear';
import { InputSelect } from './components/input-select/input-select';
import { useControl } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-control';
import { useInputs } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useDispatch } from 'react-redux';

interface PanelInterface {
  (props: { name: string; supplement: React.ReactElement }): React.ReactElement;
}

export const Panel: PanelInterface = (props) => {
  const { name, supplement } = props;
  const { [`${name}FilterPanel`]: showPanel } = useControl();
  const { [`${name}Options`]: options } = useInputs();
  const dispatch = useDispatch();
  const setControl = (value: any) => dispatch({ type: 'control', value });

  return (
    <>
      {showPanel && (
        <div
          className={`panel-container ${name}`}
          onClick={() =>
            setControl({
              [`${name}FilterPanel`]: false,
              rebuildQueryParams: true,
            })
          }
        />
      )}
      {
        <div className={`panel ${name} ${showPanel ? 'opened' : 'closed'}`}>
          <InputSelect name={name} options={options} />
          {supplement}
          <FloatClear />
        </div>
      }
    </>
  );
};
