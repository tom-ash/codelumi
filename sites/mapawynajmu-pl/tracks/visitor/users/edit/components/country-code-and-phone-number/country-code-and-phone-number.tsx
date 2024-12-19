import React from 'react';
import { UserEditCell as Cell } from '../common/cell/cell';
import { Explanation } from '../../../../../../../../common/components/support/explanation/explanationt';
import { CountryCodeSelect } from '../../../../../../../../common/components/user/components/new/components/form/components/country-code/country-code.select';
import { PhoneNumberInput } from '../../../../../../../../common/components/user/components/new/components/form/components/phone-number/phone-number.input';
import { SubmitCountryCodeAndPhoneNumberButton as SubmitButton } from './components/submit-country-code-and-phone-number-button';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';

export const UserEditCountryCodeAndPhoneNumber = () => {
  const cellProps = {
    attrName: 'countryCodeAndPhoneNumber',
  };
  const { countryCodeAndPhoneNumberInputsExplanation } = useTexts();

  return (
    <Cell {...cellProps}>
      <>
        <Explanation explanation={countryCodeAndPhoneNumberInputsExplanation} />
        <div className="country-code-and-phone-number-container">
          <CountryCodeSelect />
          <PhoneNumberInput />
        </div>
        <SubmitButton />
      </>
    </Cell>
  );
};
