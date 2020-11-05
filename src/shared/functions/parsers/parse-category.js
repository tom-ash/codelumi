import { categories } from  '../../../app/components/announcement/constants/categories'

export function parseCategory({ categoryNumber, language }) {
  return categories.find(category => category.number === categoryNumber).label[language]
}
