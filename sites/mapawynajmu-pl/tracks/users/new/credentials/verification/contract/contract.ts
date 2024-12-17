import { Lang } from '../../../../../common/types/lang';

export interface UsersNewCredentialsVerificationApp {
  lang: Lang;
}

export interface UsersNewCredentialsVerificationControl {
  connecting: boolean;
}

export interface UsersNewCredentialsVerificationTexts {
  allRightsReserved: string;
  headingOne: string;
  showMyAccountMenuButtonLabel: string;
  signOutButtonLabel: string;
  verificationCodeExplanation: string;
  verificationCodeInputInvalidError: string;
  verificationCodeInputLabel: string;
  verifyButtonLabel: string;
}

export interface UsersNewCredentialsVerificationInputs {
  verificationCode: string;
}

export interface UsersNewCredentialsVerificationErrors {
  verificationCode: string;
}
