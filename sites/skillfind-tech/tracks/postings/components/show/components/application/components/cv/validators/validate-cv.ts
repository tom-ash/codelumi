interface ValidateCV {
  (params: {
    value: File;
    errorMessage: string;
    setErrors(errors: { cv: string }): void;
  }): 'cv' | null;
}

export const validateCV: ValidateCV = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (!value) {
    setErrors({ cv: errorMessage });

    return 'cv';
  }

  return null;
};
