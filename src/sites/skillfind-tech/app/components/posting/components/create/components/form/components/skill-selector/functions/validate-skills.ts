interface ValidateSkills {
  (params: {
    value: any[];
    errorMessage: string;
    setErrors(errors: { skills: string }): void;
  }): 'skills' | null;
}

export const validateSkills: ValidateSkills = (params) => {
  const {
    value,
    errorMessage,
    setErrors,
  } = params

  if (!value.length) {
    setErrors({ skills: errorMessage })

    return 'skills'
  }

  return null
}
