interface BusinessNameValidator {
  (props: {
    businessName: string | undefined;
    setErrors(args: { businessName: boolean }): void;
  }): boolean;
}

export const businessNameValidator: BusinessNameValidator = (props) => {
  const { businessName, setErrors } = props;

  if (!businessName || businessName.length === 0) {
    setErrors({ businessName: true });
    return false;
  }

  return true;
};
