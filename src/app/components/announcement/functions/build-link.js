import { parseCategoryForUrl } from './category-parsers'
import { parseDistrictForUrl } from './district-parsers'

export function buildLink({
  id,
  category,
  district,
  area,
  language
}) {
  return (
    `${CLIENT_URL}/${{ pl: 'nieruchomosc', en: 'real-estate' }[language]}-${{ pl: 'warszawa', en: 'warsaw'}[language]}-${{ pl: 'wynajem', en: 'lease' }[language]}-${parseDistrictForUrl(district)[language]}-${parseCategoryForUrl(category)[language]}-${{ pl: 'nr', en: 'no'}[language]}-${id}`
  )
}
