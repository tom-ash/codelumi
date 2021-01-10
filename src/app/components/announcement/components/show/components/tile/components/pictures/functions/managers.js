import { buildLink } from '../../../../../../../functions/build-link'
import { ANNOUNCEMENT_SHOW_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'

export function linkManager() {
  const {
    id,
    changeData,
    category,
    district,
    changeRoute
  } = this.props

  return {
    classNames: { container: 'link' },
    label: this.langObjHandler({ pl: 'Zobacz szczegóły', en: 'See details'}),
    href: buildLink(this.props),
    hrefLang: this.langObjHandler({ pl: 'pl', en: 'en' }),
    title: this.langObjHandler({ pl: `Ogłoszenie ${id}`, en: `Announcement ${id}` }),
    onClick: () => {
      changeData({ id, category, district })
      changeRoute(ANNOUNCEMENT_SHOW_TRACK)
    }
  }
}