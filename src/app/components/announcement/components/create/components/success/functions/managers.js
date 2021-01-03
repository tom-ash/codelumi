import {
  ANNOUNCEMENT_SHOW_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export function goToAnnouncementManager() {
  const {
    id,
    category,
    district,
    area,
    languageObjectHandler,
    changeAnnouncementShowData,
    changeRoute
  } = this.props

  return {
    classNames: { container: 'go-to-announcement' },
    label: languageObjectHandler({ pl: 'Pokaż dodane ogłoszenie', en: 'Show the added announcement' }),
    onClick: () => {
      changeAnnouncementShowData({ id, category, district, area })
      changeRoute(ANNOUNCEMENT_SHOW_TRACK)
    }
  }
}