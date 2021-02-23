import announcementTitleProvider from '../../../../providers/announcement/title.js'

function announcementShowTitleParser({ title, lang }) {
  return announcementTitleProvider({ ...title, lang })
}

export default announcementShowTitleParser
