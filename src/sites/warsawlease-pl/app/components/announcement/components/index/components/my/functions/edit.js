import buildAnnouncementEditUrl from '../../../../../../../../shared/functions/builders/announcement/edit-url.js'
import CLIENT_URL from '../../../../../../../../shared/constants/urls/client.js'

export function edit({ id }) {
  const { lang } = this.props
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${buildAnnouncementEditUrl({ announcementEditData: { announcement: { id }}, lang })}`

  changeRoute({ href })
}
