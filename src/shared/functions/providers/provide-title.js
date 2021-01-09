import { parseCategory } from '../parsers/parse-category'
import { parseDistrict } from '../parsers/parse-district'

export function provideTitle({
  category,
  district,
  area,
  lang
}) {
  const language = lang

  return `${parseCategory({ categoryNumber: +category, language })} ${{ pl: 'na wynajem', en: 'for lease' }[lang]}, ${parseDistrict(district)}, ${{ pl: 'Warszawa', en: 'Warsaw' }[lang]}, ${area} ${{ pl: 'm2', en: 'sqm' }[lang]}`
}
