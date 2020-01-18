import { categories } from '../constants/categories'

export function parseCategory(categoryNumber) {
  switch (categoryNumber) {
    case 0: return this.languageObjectHandler({ pl: 'Biuro', en: 'Office' })
    case 1: return this.languageObjectHandler({ pl: 'Lokal użytkowy', en: 'Usable Premises' })
    case 2: return this.languageObjectHandler({ pl: 'Mieszkanie', en: 'Apartment' })
    default: return {}
  }
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
