import { parseCategory } from '../parsers/parse-category'
import { parseDistrict } from '../parsers/parse-district'

export function provideTitle({ category, district, area, language }) {
  return `${parseCategory(category)[language]}, ${parseDistrict(district)}, ${area} m2 | warsawlease.pl`
}