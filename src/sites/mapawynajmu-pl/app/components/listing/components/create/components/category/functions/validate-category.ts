import { CATEGORY_ID } from '../category'

interface ValidateCategory {
  (params: { category: number | null; setErrors(errors: { isCategoryError: boolean }): void }): 'category' | null
}

export const validateCategory: ValidateCategory = params => {
  const { category, setErrors } = params

  // TODO: Refactor.
  // @ts-ignore
  if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(category)) {
    setErrors({ isCategoryError: true })

    return CATEGORY_ID
  }

  return null
}
