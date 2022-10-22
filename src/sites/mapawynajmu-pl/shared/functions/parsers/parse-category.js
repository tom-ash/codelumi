import { categories } from '../../../app/components/announcement/constants/categories'

export function parseCategory({ categoryNumber, lang }) {
  return categories.find(category => category.number === categoryNumber).label[lang]
}
