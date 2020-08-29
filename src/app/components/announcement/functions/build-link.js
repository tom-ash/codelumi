import { parseCategoryForUrl } from './category-parsers'
import { parseDistrictForUrl } from './district-parsers'

export function buildLink({
  id,
  category,
  district,
  language
}) {
  return (
    `${CLIENT_URL}/${id}-${parseCategoryForUrl(category)[language]}-${{ pl: 'na-wynajem', en: 'for-lease' }[language]}-${{ pl: 'warszawa', en: 'warsaw'}[language]}-${parseDistrictForUrl(district)[language]}`
  )
}
