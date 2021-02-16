import { buildLink } from '../../../../../../functions/build-link'
import { ANNOUNCEMENT_SHOW_TRACK } from '../../../../../../../../../shared/constants/tracks/tracks'

export function linkManager() {
  const {
    id,
    changeData,
    category,
    district,
  } = this.props

  const { changeUrl } = this.context
  const href = buildLink(this.props)

  return {
    classNames: { container: 'link' },
    label: this.langObjHandler({ pl: 'Zobacz szczegóły', en: 'See details'}),
    href,
    hrefLang: this.langObjHandler({ pl: 'pl', en: 'en' }),
    title: this.langObjHandler({ pl: `Ogłoszenie ${id}`, en: `Announcement ${id}` }),
    onClick: () => {
      changeData({ id, category, district })
      changeUrl({ href })
    }
  }
}