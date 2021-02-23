import { parseCategory } from '../../../parse-category'
import { parseDistrict } from '../../../parse-district'

function announcementShowKeywordsParser({ keywords, lang }) {
  const { category, district } = keywords

  const parsedKeywords = [
    { pl: 'warszawa', en: 'warsaw' }[lang],
    { pl: 'wynajem', en: 'lease' }[lang],
    parseCategory({ categoryNumber: +category, lang }).toLowerCase(),
    parseDistrict(district).toLowerCase()
  ].join(', ')

  return parsedKeywords
}

export default announcementShowKeywordsParser
