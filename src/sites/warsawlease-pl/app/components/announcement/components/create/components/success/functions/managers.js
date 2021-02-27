import { ANNOUNCEMENT_SHOW_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'
import { buildLink } from '../../../../../functions/build-link.js'

export function goToAnnouncementManager() {
  const langHandler = this.props

  const { changeUrl } = this.context
  const href = buildLink(this.props)

  return {
    classNames: { container: 'go-to-announcement' },
    href,
    label: langHandler({ pl: 'Pokaż dodane ogłoszenie', en: 'Show the added announcement' }),
    onClick: () => {
      changeUrl({ href })
    }
  }
}