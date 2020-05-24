import { buildLink } from '../../../../../../../functions/build-link'

export function linkManager() {
  const {
    id,
    changeApp,
    changeData,
    category,
    district,
    area
  } = this.props

  return {
    classNames: { container: 'link' },
    href: buildLink(this.props),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: `Ogłoszenie ${id}`, en: `Announcement ${id}` }),
    onClick: () => {
      changeData({
        category,
        district,
        area
      })
      changeApp({
        announcementId: id,
        showAnnouncementShow: true,
        showAnnouncementIndexMap: false,
        showAnnouncementIndexList: false,
        showAnnouncementIndexAdded: false
      })
    }
  }
}
