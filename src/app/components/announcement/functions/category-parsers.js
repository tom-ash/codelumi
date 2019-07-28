import { categories } from '../constants/categories'

export function parseCategory(categoryNumber) {
  return { label: { polish: '', english: '' } }
  // if (categoryNumber === undefined) return { label: { polish: '', english: '' } }
  // return categories.find(category => category.number === categoryNumber).label
}

export function parseCategoryForUrl(categoryNumber) {
  return categories.find(category => category.number === categoryNumber).url
}

export function reverseParseCategory(categoryName) {
  const foundCategory = categories.find(category => category.url.polish === categoryName ||
                                                    category.url.english === categoryName)
  if (!foundCategory) return ''
  return foundCategory.number
}