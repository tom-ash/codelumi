interface ValidateEmail {
  (params: {
    value: string;
    errorMessage: string;
    setErrors(errors: { email: string }): void;
  }): 'email' | null;
}

export const validateEmail: ValidateEmail = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (!value) {
    setErrors({ email: errorMessage });

    return 'email';
  }

  return null;
};
