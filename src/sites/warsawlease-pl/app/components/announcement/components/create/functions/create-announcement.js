import API_URL from '../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../user/components/authorize/components/tokens/functions/get-tokens'
import { CREATE_API_ROUTE_DATA, CREATE_WITH_USER_API_ROUTE_DATA, UPDATE_API_ROUTE_DATA } from '../constants/api-route-data.js'
import { ANNOUNCEMENT_CREATE_VERIFICATION_TRACK, ANNOUNCEMENT_CREATE_SUCCESS_TRACK } from '../../../../../../shared/constants/tracks/tracks.js'
import changeRouteWithHref from '../../../../../../app/functions/routes/changers/route-with-href.js'
import getHrefByTrackAndLang from '../../../../../functions/routes/getters/href-by-track-and-lang.js'
import { ANNOUNCEMENT_CREATE_SUCCESS_URLS } from '../../../../../../shared/constants/routes/urls.js'
import CLIENT_URL from '../../../../../../shared/constants/urls/client.js'
import setConfirmationTokenCookie from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token.js'

function sendAnnouncementCreatedEvent() {
  window.dataLayer.push({ 'event': 'announcement_created' })
}

function createAnnouncement() {
  const { authorized, renderEdit, changeControl } = this.props

  changeControl({ connecting: true })

  if (renderEdit) return update.call(this)
  if (authorized) return create.call(this)

  createWithUser.call(this)
}

function update() {
  const { lang, announcement, changeControl } = this.props
  const { method, route } = UPDATE_API_ROUTE_DATA
  const accessToken = getAccessToken()
  const id = window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]

  fetch(API_URL + route + `/${id}`, {
    method,
    headers: { 'Content-Type': 'application/json', 'Lang': lang, 'Access-Token': accessToken },
    body: JSON.stringify({ announcement })
  })
  .then(response => {
    if (response.ok) {
      const { changeRoute } = this.context
      const track = ANNOUNCEMENT_CREATE_SUCCESS_TRACK
  
      changeRouteWithHref({ lang, track, changeRoute })
      changeControl({ connecting: false })
    }
  })
}

function create() {
  const { lang, announcement, changeControl } = this.props
  const { method, route } = CREATE_API_ROUTE_DATA
  const accessToken = getAccessToken()

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Lang': lang, 'Access-Token': accessToken },
    body: JSON.stringify({ announcement })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    const { changeRoute } = this.context
    const { id } = jsonResponse
    const href = `${CLIENT_URL}/${this.langHandler(ANNOUNCEMENT_CREATE_SUCCESS_URLS)}?id=${id}`

    changeRoute({ href })
    changeControl({ connecting: false })

    sendAnnouncementCreatedEvent()
  })
}

function createWithUser() {
  const { lang, announcement, user, changeControl, changeData } = this.props
  const { method, route } = CREATE_WITH_USER_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Lang': lang },
    body: JSON.stringify({ announcement, user })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    const { changeRoute } = this.context
    const { confirmationToken } = jsonResponse
    const track = ANNOUNCEMENT_CREATE_VERIFICATION_TRACK
    const href = getHrefByTrackAndLang({ track, lang })
    const { id } = jsonResponse

    setConfirmationTokenCookie(confirmationToken)
    changeData({ id })
    changeRoute({ href })
    changeControl({ connecting: false })

    sendAnnouncementCreatedEvent()
  })
}

export default createAnnouncement
