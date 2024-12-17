import { SkillDto } from '../../../types/skill.dto';

interface ValidateSkills {
  (params: {
    value: SkillDto[];
    errorMessage: string;
    setErrors(errors: { skills: string }): void;
  }): 'skills' | null;
}

export const validateSkills: ValidateSkills = (params) => {
  const { value, errorMessage, setErrors } = params;

  if (!value.length) {
    setErrors({ skills: errorMessage });

    return 'skills';
  }

  return null;
};
