import { ANNOUNCEMENT_SHOW_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import { buildLink } from '../../../../../functions/build-link.js'

export function goToAnnouncementManager() {
  const { langObjHandler } = this.props

  const { changeRoute } = this.context
  const href = buildLink(this.props)
  const track = ANNOUNCEMENT_SHOW_TRACK

  return {
    classNames: { container: 'go-to-announcement' },
    href,
    label: langObjHandler({ pl: 'Pokaż dodane ogłoszenie', en: 'Show the added announcement' }),
    onClick: () => {
      changeRoute({ href, track })
    }
  }
}