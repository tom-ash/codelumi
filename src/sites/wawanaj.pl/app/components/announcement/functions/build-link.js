import { parseCategoryForUrl } from './category-parsers'
import { parseDistrictForUrl } from './district-parsers'

export function buildLink({
  id,
  category,
  district,
  lang
}) {
  return (
    `${CLIENT_URL}/${id}-${parseCategoryForUrl(category)[lang]}-${{ pl: 'na-wynajem', en: 'for-lease' }[lang]}-${{ pl: 'warszawa', en: 'warsaw'}[lang]}-${parseDistrictForUrl(district)[lang]}`
  )
}
