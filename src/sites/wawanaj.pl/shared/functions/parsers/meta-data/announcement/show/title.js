import { provideTitle } from '../../../../providers/provide-title'

export function announcementShowMetaDataTitleParser({ title, lang }) {
  return provideTitle({ ...title, lang })
}
