export function linkManager() {
  const {
    id,
    changeApp
  } = this.props

  return {
    classNames: { container: 'link' },
    href: this.languageObjectHandler({ pl: `${CLIENT_URL}/${id}`, en: `${CLIENT_URL}/${id}` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: `Ogłoszenie ${id}`, en: `Announcement ${id}` }),
    onClick: () => {
      changeApp({
        showAnnouncementShow: true,
        announcementId: id,
        showAnnouncementIndexMap: false,
        showAnnouncementIndexList: false,
        showAnnouncementIndexAdded: false,
      })
    }
  }
}
