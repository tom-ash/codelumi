import React from 'react';
import { UserEditCell as Cell } from '../common/cell/cell';
import { Explanation } from '../../../../../../../../common/components/support/explanation/explanationt';
import { BusinessNameInput } from '../../../../../../../../common/components/user/components/new/components/form/components/business-name/business-name.input';
import { SubmitBusinessNameButton } from './components/submit-business-name-button';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export const UserEditBusinessName = () => {
  const cellProps = {
    attrName: 'businessName',
  };
  const { businessNameInputExplanation } = useTexts();

  return (
    <Cell {...cellProps}>
      <Explanation explanation={businessNameInputExplanation} />
      <BusinessNameInput />
      <SubmitBusinessNameButton />
    </Cell>
  );
};
