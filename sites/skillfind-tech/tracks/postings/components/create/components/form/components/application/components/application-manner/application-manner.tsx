import React from 'react';
import { useDispatch } from 'react-redux';
import { ManagedCheckbox } from 'managed-inputs';
import { useInputs } from '../../../../../../../../../../../src copy/sites/shared/app/functions/store/use-inputs';
import { useTexts } from '../../../../../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export enum ApplicationMannerEnum {
  FORM = 'form',
  LINK = 'link',
}

interface ApplicationMannerInterface {
  (props: { name: ApplicationMannerEnum }): React.ReactElement;
}

export const ApplicationManner: ApplicationMannerInterface = (props) => {
  const { name } = props;
  const mannerKey = `${name}ApplicationManner`;
  const { [mannerKey]: checked } = useInputs();
  const { [`${mannerKey}Label`]: label } = useTexts();
  const dispatch = useDispatch();
  const setInputs = (value: any) => dispatch({ type: 'inputs', value });
  const setErrors = (value: any) => dispatch({ type: 'errors', value });

  return (
    <section className="application-manner">
      <ManagedCheckbox
        classNames={{ container: 'form-input checkbox' }}
        checked={checked}
        label={label}
        onClick={() => {
          setErrors({ isApplicationError: false });
          setInputs({ [mannerKey]: !checked });
        }}
      />
    </section>
  );
};
