import { parseCategory } from '../../../parse-category'
import { parseDistrict } from '../../../parse-district'

export function announcementShowMetaDataKeywordsParser({ keywords, lang }) {
  const { category, district } = keywords
  const language = lang

  const parsedKeywords = [
    { pl: 'warszawa', en: 'warsaw' }[lang],
    { pl: 'wynajem', en: 'lease' }[lang],
    parseCategory({ categoryNumber: +category, language }).toLowerCase(),
    parseDistrict(district).toLowerCase()
  ].join(', ')

  return parsedKeywords
}
