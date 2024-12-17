import { AccountTypeRadio } from '../../../../../../../../../common/components/user/components/new/components/form/components/account-type/account-type.radio';
import { BusinessNameInput } from '../../../../../../../../../common/components/user/components/new/components/form/components/business-name/business-name.input';
import { AccountType } from '../../../../../../common/types/user.types';
import {
  SetControl,
  SetErrors,
  SetInputs,
} from '../../../../../../../../../../lib/types/setters';
import {
  UsersNewCredentialsFormApp,
  UsersNewCredentialsFormControl,
  UsersNewCredentialsFormErrors,
  UsersNewCredentialsFormInputs,
  UsersNewCredentialsFormTexts,
} from '../../../contract/contract';
import textInputStyles from '../../../../../../../common/styles/inputs/text.module.css';
import selectStyles from '../../../../../../../common/styles/inputs/select.module.css';
import checkboxStyles from '../../../../../../../common/styles/inputs/checkbox.module.css';
import { EmailAddressInput } from '../../../../../../../../../common/components/user/components/common/components/email-address/email-address.input';
import {
  PasswordAutoComplete,
  PasswordInput,
} from '../../../../../../../../../common/components/user/components/common/components/password/password.input';
import { CountryCodeSelect } from '../../../../../../../../../common/components/user/components/new/components/form/components/country-code/country-code.select';
import { PhoneNumberInput } from '../../../../../../../../../common/components/user/components/new/components/form/components/phone-number/phone-number.input';
import { TermsOfServiceConsent } from '../../../../../../../../../common/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent';
import { LinksData } from '../../../../../../../../../../lib/types/link-data';
import { SignUpButton } from './components/sign-up-button';
import { useCallback } from 'react';
import { signUp } from './functions/sign-up';
import { useRouter } from 'next/navigation';
import containerStyles from '../../../../../../../../../common/styles/container.module.css';
import buttonStyles from '../../../../../../../common/styles/inputs/button.module.css';
import countryCodeAndPhoneNumberContainerStyles from './styles/country-code-phone-number-container.module.css';
import styles from './styles/styles.module.css';

interface UsersNewCredentialsProps {
  app: UsersNewCredentialsFormApp;
  control: UsersNewCredentialsFormControl;
  texts: UsersNewCredentialsFormTexts;
  inputs: UsersNewCredentialsFormInputs;
  errors: UsersNewCredentialsFormErrors;
  links: LinksData;
  setControl: SetControl;
  setInputs: SetInputs;
  setErrors: SetErrors;
}

export const UsersNewCredentialsForm = (props: UsersNewCredentialsProps) => {
  const {
    app: { lang },
    control: { connecting },
    texts: {
      businessNameInputLabel,
      businessNameInputPlaceholder,
      businessNameInputInvalidError,
      emailInputLabel,
      emailInputPlaceholder,
      emailInputInvalidError,
      passwordInputLabel,
      passwordInputPlaceholder,
      passwordInputInvalidError,
      // phoneNumberExplanation,
      phoneNumberInputLabel,
      phoneNumberInputPlaceholder,
      phoneNumberInputInvalidError,
      termsOfService,
      termsOfServiceConsentLabel,
      termsOfServiceConsentNotGrantedError,
      termsOfServiceConsentSyntheticLabel,
      signUpButtonLabel,
    },
    inputs: {
      accountTypes,
      accountType,
      businessName,
      emailAddress,
      password,
      countryCode,
      countryCodes,
      phoneNumber,
      termsOfServiceConsent,
    },
    errors: {
      businessName: isBusinessNameError,
      emailAddress: isEmailAddressError,
      password: isPasswordError,
      phoneNumber: isPhoneNumberError,
      termsOfServiceConsent: isTermsOfServiceConsentError,
    },
    links: { 'visitor/terms-of-service': termsOfServiceLink },
    setControl,
    setInputs,
    setErrors,
  } = props;

  const router = useRouter();

  const submit = useCallback(
    () =>
      signUp({
        lang,
        accountType,
        businessName,
        emailAddress,
        password,
        countryCode,
        phoneNumber,
        termsOfServiceConsent,
        termsOfServiceConsentLabel,
        setControl,
        setErrors,
        router,
      }),
    [
      lang,
      accountType,
      businessName,
      emailAddress,
      password,
      countryCode,
      phoneNumber,
      termsOfServiceConsent,
    ],
  );

  return (
    <form className={containerStyles.container}>
      <div className={styles.accountType}>
        <AccountTypeRadio
          options={accountTypes}
          checked={accountType}
          setInputs={setInputs}
        />
      </div>
      {accountType === AccountType.BUSINESS && (
        <BusinessNameInput
          label={businessNameInputLabel}
          placeholder={businessNameInputPlaceholder}
          error={businessNameInputInvalidError}
          isError={isBusinessNameError}
          value={businessName}
          setInputs={setInputs}
          setErrors={setErrors}
          styles={textInputStyles}
        />
      )}
      <EmailAddressInput
        label={emailInputLabel}
        placeholder={emailInputPlaceholder}
        error={emailInputInvalidError}
        isError={isEmailAddressError}
        value={emailAddress}
        setInputs={setInputs}
        setErrors={setErrors}
        styles={textInputStyles}
      />
      <PasswordInput
        autoComplete={PasswordAutoComplete.NEW_PASSWORD}
        label={passwordInputLabel}
        placeholder={passwordInputPlaceholder}
        error={passwordInputInvalidError}
        isError={isPasswordError}
        value={password}
        setInputs={setInputs}
        setErrors={setErrors}
        styles={textInputStyles}
      />
      <fieldset
        className={
          countryCodeAndPhoneNumberContainerStyles.countryCodeAndPhoneNumberContainer
        }
      >
        <CountryCodeSelect
          value={countryCode}
          options={countryCodes}
          setInputs={setInputs}
          styles={{
            ...selectStyles,
            ...countryCodeAndPhoneNumberContainerStyles,
          }}
        />
        <PhoneNumberInput
          label={phoneNumberInputLabel}
          placeholder={phoneNumberInputPlaceholder}
          error={phoneNumberInputInvalidError}
          isError={isPhoneNumberError}
          value={phoneNumber}
          setInputs={setInputs}
          setErrors={setErrors}
          styles={{
            ...textInputStyles,
            ...countryCodeAndPhoneNumberContainerStyles,
          }}
        />
      </fieldset>
      <TermsOfServiceConsent
        value={termsOfServiceConsent}
        isError={isTermsOfServiceConsentError}
        error={termsOfServiceConsentNotGrantedError}
        setInputs={setInputs}
        setErrors={setErrors}
        termsOfService={termsOfService}
        syntheticLabel={termsOfServiceConsentSyntheticLabel}
        termsOfServiceLink={termsOfServiceLink}
        styles={checkboxStyles}
      />
      {/* TODO: ADD CONDITIONAL */}
      <SignUpButton
        label={signUpButtonLabel}
        submit={submit}
        styles={buttonStyles}
        setControl={setControl}
        connecting={connecting}
      />
    </form>
  );
};

export default UsersNewCredentialsForm;
