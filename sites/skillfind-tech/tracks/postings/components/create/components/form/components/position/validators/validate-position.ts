interface ValidatePosition {
  (params: {
    value: string;
    errorMessage: string;
    setErrors(errors: { position: string }): void;
  }): 'position' | null;
}

export const validatePosition: ValidatePosition = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (!value) {
    setErrors({ position: errorMessage });

    return 'position';
  }

  return null;
};
