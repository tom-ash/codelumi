import { categories } from '../constants/categories'

export function parseCategory(categoryNumber) {
  return { label: { pl: '', en: '' } }
  // if (categoryNumber === undefined) return { label: { pl: '', en: '' } }
  // return categories.find(category => category.number === categoryNumber).label
}

export function parseCategoryForUrl(categoryNumber) {
  return categories.find(category => category.number === categoryNumber).url
}

export function reverseParseCategory(categoryName) {
  const foundCategory = categories.find(category => category.url.pl === categoryName ||
                                                    category.url.en === categoryName)
  if (!foundCategory) return ''
  return foundCategory.number
}