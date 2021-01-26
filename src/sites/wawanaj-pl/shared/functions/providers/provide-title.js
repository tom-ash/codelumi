import { parseCategory } from '../parsers/parse-category'
import { parseDistrict } from '../parsers/parse-district'

export function provideTitle({
  category: categoryNumber,
  district,
  area,
  lang
}) {
  const parsedCategory = parseCategory({ categoryNumber, lang })
  const forLease = { pl: 'na wynajem', en: 'for lease' }[lang]
  const categoryForLease = `${parsedCategory} ${forLease}`
  const warsaw = { pl: 'Warszawa', en: 'Warsaw' }[lang]
  const districtName = parseDistrict(district)
  const areaWithSqm = `${area} ${{ pl: 'm2', en: 'sqm' }[lang]}`

  const title = [
    categoryForLease,
    warsaw,
    districtName,
    areaWithSqm
  ].join(', ')

  return title
}
