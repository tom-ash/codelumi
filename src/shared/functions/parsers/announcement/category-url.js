import { categories } from '../../../constants/announcement/categories'

export function parseCategoryForUrl(categoryNumber) {
  return categories.find(category => category.number === categoryNumber).url
}