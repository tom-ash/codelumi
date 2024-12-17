import { validateApplicationLink } from '../components/application-link/functions/validate-application-link';

interface ValidateLocation {
  (params: {
    formApplicationManner: boolean;
    linkApplicationManner: boolean;
    applicationLink: string;
    applicationLinkError: string;
    setErrors(params: object): void;
  }): 'application' | null;
}

export const validateApplication: ValidateLocation = (params) => {
  const {
    formApplicationManner,
    linkApplicationManner,
    applicationLink,
    applicationLinkError,
    setErrors,
  } = params;

  if (!(formApplicationManner || linkApplicationManner)) {
    setErrors({ isApplicationError: true });

    return 'application';
  }

  if (
    linkApplicationManner &&
    !validateApplicationLink({
      value: applicationLink,
      errorMessage: applicationLinkError,
      setErrors,
    })
  ) {
    return 'application';
  }

  return null;
};
