import { CATEGORY_ID } from './category';

interface CategoryValidatorParams {
  category: number | null | undefined | string;
  setErrors(errors: { isCategoryError: boolean }): void;
}

export const categoryValidator = (
  params: CategoryValidatorParams,
): 'category' | null => {
  const { category, setErrors } = params;

  // TODO: Get rid of undefined & string.
  if (category === null || category === undefined || category === '') {
    setErrors({ isCategoryError: true });

    return CATEGORY_ID;
  }

  return null;
};
