import { Picture } from '../../../../../../../../../../../common/components/support/picture-input/types/picture.interface';
import { buildUserObject } from './build-user-object';
import { postUserObject } from './post-user-object';
import { validateInputs } from './validate-inputs';

interface SubmitForm {
  (args: {
    businessName: string;
    businessNameError: string;
    link: string;
    linkError: string;
    industry: string;
    lang: Lang;
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
    termsOfServiceConsent: boolean;
    termsOfServiceConsentLabel: string;
    setControl(args: { connecting: boolean }): void;
    setErrors(args: any): void; // TODO
    logo: Picture;
    logoError: string;
  }): void;
}

export const submitForm: SubmitForm = (args) => {
  const {
    businessName,
    businessNameError,
    link,
    linkError,
    industry,
    logo,
    logoError,
    lang,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    setControl,
    setErrors,
  } = args;

  const validations = validateInputs({
    businessName,
    businessNameError,
    link,
    linkError,
    industry,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    logo,
    logoError,
    setErrors,
  });

  const userObjectInvalid = validations.find((element) => element);

  if (userObjectInvalid) {
    setControl({ connecting: false });

    return;
  }

  const userObject = buildUserObject({
    businessName,
    businessNameError,
    industry,
    email,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    logoError,
    setErrors,
    link,
  });

  postUserObject({ userObject, lang });
};
