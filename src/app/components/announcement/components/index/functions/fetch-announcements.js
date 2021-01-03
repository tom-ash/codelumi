import { apiUrl } from '../../../../../constants/urls'
import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function fetchAnnouncements() {
  const {
    changeControl,
    changeData,
    connecting,
    renderMy
  } = this.props
  
  if (connecting) return

  let headers = { 'Content-Type': 'application/json' }
  if (renderMy) headers = {
    ...headers,
    access_token: getAccessToken(),
    my: true
  }

  changeData({
    announcements: null,
    amount: null
  })

  changeControl({
    connecting: true,
    fetch: false,
    loadPins: false
  })

  fetch(apiUrl + `/announcements`, {
    headers
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const { amount } = json
    const announcements = json.announcements.map(announcement => {
      announcement.pictureIndex = 0
      announcement.showLoader = true
      return announcement
    })
    if (announcements && announcements[0]) announcements[0].show = true
    changeData({ amount, announcements })
    changeControl({ connecting: false })
  })
}
