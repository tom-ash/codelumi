interface ValidateLastName {
  (params: {
    value: string;
    errorMessage: string;
    setErrors(errors: { lastName: string }): void;
  }): 'last-name' | null;
}

export const validateLastName: ValidateLastName = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (!value) {
    setErrors({ lastName: errorMessage });

    return 'last-name';
  }

  return null;
};
