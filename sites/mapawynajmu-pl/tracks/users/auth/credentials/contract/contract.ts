import { LinkData } from '../../../../../../../lib/types/link-data';
import {
  SetControl,
  SetErrors,
  SetInputs,
} from '../../../../../../../lib/types/setters';
import { Lang } from '../../../../common/types/lang';

export interface UsersAuthCredentialsContract {
  app: UsersAuthCredentialsApp;
  control: UsersAuthCredentialsControl;
  texts: UsersAuthCredentialsTexts;
  links: UsersAuthCredentialsLinks;
  inputs: UsersAuthCredentialsInputs;
  errors: UsersAuthCredentialsErrors;
  setInputs: SetInputs;
  setErrors: SetErrors;
  setControl: SetControl;
}

export interface UsersAuthCredentialsApp {
  lang: Lang;
}

export interface UsersAuthCredentialsControl {
  connecting: boolean;
}

export interface UsersAuthCredentialsTexts {
  headingOne: string;
  emailInputLabel: string;
  emailInputPlaceholder: string;
  emailInputInvalidError: string;
  passwordInputLabel: string;
  passwordInputPlaceholder: string;
  passwordInputInvalidError: string;
  credentialsInvalidError: string;
  resetPassword: string;
}

export interface UsersAuthCredentialsLinks {
  'user/password-reset': LinkData;
}

export interface UsersAuthCredentialsInputs {
  emailAddress: string;
  password: string;
}

export interface UsersAuthCredentialsErrors {
  emailAddress: boolean;
  password: boolean;
  credentials: boolean;
}
