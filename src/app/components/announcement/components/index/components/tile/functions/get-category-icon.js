import { categories } from '../../../../../constants/categories'

export function getCategoryIcon(categoryNumber) {
  return categories[categoryNumber].icon
}