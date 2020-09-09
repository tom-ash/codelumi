export function goToAnnouncementManager() {
  const {
    savedId,
    id,
    category,
    district,
    area,
    languageObjectHandler,
    changeApp,
    changeAnnouncementShowData
  } = this.props

  return {
    classNames: { container: 'go-to-announcement' },
    label: languageObjectHandler({ pl: 'Pokaż dodane ogłoszenie', en: 'Show the added announcement' }),
    onClick: () => {
      changeAnnouncementShowData({
        category,
        district,
        area
      })
      changeApp({
        announcementId: savedId || id,
        showAnnouncementShow: true,
        showAnnouncementCreate: false,
        showAnnouncementEdit: false,
      })
    }
  }
}