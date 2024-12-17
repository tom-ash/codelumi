interface ValidatePassword {
  (params: {
    value: string;
    errorMessage: string;
    setErrors(errors: { password: string }): void;
  }): 'password' | null;
}

export const validatePassword: ValidatePassword = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (typeof value !== 'string' || value.length < 6) {
    setErrors({ password: errorMessage });

    return 'password';
  }

  return null;
};
