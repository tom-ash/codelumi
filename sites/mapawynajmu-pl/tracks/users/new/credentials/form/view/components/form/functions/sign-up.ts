import { SetControl } from '../../../../../../../../../../../lib/types/setters';
import { AccountType } from '../../../../../../../common/types/user.types';
import { buildUserObject } from './build-user-object';
import { postUserObject } from './post-user-object';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface SignUp {
  (args: {
    lang: string;
    accountType: AccountType;
    businessName: string;
    emailAddress: string;
    password: string;
    countryCode: string;
    phoneNumber: string;
    termsOfServiceConsent: boolean;
    termsOfServiceConsentLabel: string;
    setControl: SetControl;
    setErrors(args: any): void; // TODO
    router: AppRouterInstance;
  }): void;
}

export const signUp: SignUp = (args) => {
  const {
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
  } = args;

  const userObject = buildUserObject({
    accountType,
    businessName,
    emailAddress,
    password,
    countryCode,
    phoneNumber,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setErrors,
  });

  if (!userObject) return setControl({ connecting: false });

  postUserObject({ userObject, lang, router });
};
