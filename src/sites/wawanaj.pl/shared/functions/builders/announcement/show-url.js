import { parseCategoryForUrl } from '../../parsers/announcement/category-url'
import { parseDistrictForUrl } from '../../parsers/announcement/district-url'
import { PL, EN } from '../../../constants/langs/langs'

const FOR_LEASE = {
  [PL]: 'na-wynajem',
  [EN]: 'for-lease'
}
const WARSAW_URL = {
  [PL]: 'warszawa',
  [EN]: 'warsaw'
}

export function buildAnnouncementShowUrl() {
  const {
    lang,
    announcementShowData: {
      id,
      category,
      district
    }
  } = this.props

  if (!id) return ''

  return (
    `${id}-${parseCategoryForUrl(category)[lang]}-${FOR_LEASE[lang]}-${WARSAW_URL[lang]}-${parseDistrictForUrl(district)}`
  )
}
