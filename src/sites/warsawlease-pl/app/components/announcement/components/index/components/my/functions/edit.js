import buildAnnouncementEditUrl from '../../../../../../../../shared/functions/builders/announcement/edit-url.js'

export function edit({ id }) {
  const { lang } = this.props
  const { changeRoute } = this.context
  const href = `${CLIENT_URL}/${buildAnnouncementEditUrl({ announcementCreateData: { id }, lang })}`

  changeRoute({ href })
}
