import { parseCategory } from '../parsers/parse-category'
import { parseDistrict } from '../parsers/parse-district'

export function provideTitle({
  category,
  district,
  area,
  language
}) {
  return `${parseCategory(category)[language]} ${{ pl: 'na wynajem', en: 'for lease' }[language]}, ${parseDistrict(district)}, ${{ pl: 'Warszawa', en: 'Warsaw' }[language]}, ${area} ${{ pl: 'm2', en: 'sqm' }[language]}`
}