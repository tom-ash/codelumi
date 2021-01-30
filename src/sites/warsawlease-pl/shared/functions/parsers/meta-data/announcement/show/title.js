import announcementTitleProvider from '../../../../providers/announcement/title.js'

export function announcementShowMetaDataTitleParser({ title, lang }) {
  return announcementTitleProvider({ ...title, lang })
}
