import { categories } from '../constants/categories'

export function parseCategoryForUrl(categoryNumber) {
  return categories.find(category => category.number === categoryNumber).url
}

export function reverseParseCategory(categoryName) {
  const foundCategory = categories.find(category => category.url.pl === categoryName ||
                                                    category.url.en === categoryName)
  if (!foundCategory) return ''
  return foundCategory.number
}
