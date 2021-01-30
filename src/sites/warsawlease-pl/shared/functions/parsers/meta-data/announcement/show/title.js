import { announcementTitleProvider } from '../../../../providers/title'

export function announcementShowMetaDataTitleParser({ title, lang }) {
  return announcementTitleProvider({ ...title, lang })
}
