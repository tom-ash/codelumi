import { apiUrl } from '../../../../../constants/urls'

export function getAnnouncements() {
  const { connecting, changeControl, changeData } = this.props
  changeControl({
    connecting: true
  })
  changeData({
    amount: null,
    announcements: null
  })
  if (connecting) return

  const requestParams = this.buildRequestParameters()
  // var newurl = window.location.protocol + "//" + window.location.host + this.buildparams();
  // window.history.pushState({path:newurl},'',newurl);

  fetch(apiUrl + `/announcements${requestParams}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonRes => {
    const announcements = jsonRes.announcements.map(announcement => {
      announcement.pictureIndex = 0
      return announcement
    })
    changeData({
      panelAmount: jsonRes.amount,
      listAmount: jsonRes.amount,
      announcements: announcements
    })
    changeControl({
      connecting: false,
      fetch: false,
      changed: false
    })
  })
}