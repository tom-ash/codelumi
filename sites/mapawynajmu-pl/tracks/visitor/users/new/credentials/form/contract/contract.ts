import { RadioOption } from '../../../../../../../common/types/radio-option';
import { AccountType } from '../../../../common/types/user.types';

export interface UsersNewCredentialsFormApp {
  lang: string;
}

export interface UsersNewCredentialsFormControl {
  connecting: boolean;
}

export interface UsersNewCredentialsFormTexts {
  businessNameInputLabel: string;
  businessNameInputPlaceholder: string;
  businessNameInputInvalidError: string;
  emailInputLabel: string;
  emailInputPlaceholder: string;
  emailInputInvalidError: string;
  passwordInputInvalidError: string;
  passwordInputLabel: string;
  passwordInputPlaceholder: string;
  phoneNumberExplanation: string;
  phoneNumberInputLabel: string;
  phoneNumberInputPlaceholder: string;
  phoneNumberInputInvalidError: string;
  termsOfService: string;
  termsOfServiceConsentLabel: string;
  termsOfServiceConsentNotGrantedError: string;
  termsOfServiceConsentSyntheticLabel: string;
  signUpButtonLabel: string;
}

export interface UsersNewCredentialsFormInputs {
  accountTypes: RadioOption[];
  accountType: AccountType;
  businessName: string;
  emailAddress: string;
  password: string;
  countryCode: string;
  countryCodes: string[];
  phoneNumber: string;
  termsOfServiceConsent: boolean;
}

export interface UsersNewCredentialsFormErrors {
  businessName: boolean;
  emailAddress: boolean;
  password: boolean;
  phoneNumber: boolean;
  termsOfServiceConsent: boolean;
}
