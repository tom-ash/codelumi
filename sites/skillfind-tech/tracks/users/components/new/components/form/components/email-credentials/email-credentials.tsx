import React from 'react';
import { useRender } from '../../../../../../../../../src copy/sites/shared/app/functions/store/use-render';
import { Email } from '../../../../../../../../../../common/components/support/inputs/email/email';
import { Password } from '../../../../../../../../../../common/components/support/inputs/password/password';

export const EmailCredentials = () => {
  const render = useRender();

  return (
    <fieldset className="email-credentials">
      <Email />
      <Password />
    </fieldset>
  );
};
