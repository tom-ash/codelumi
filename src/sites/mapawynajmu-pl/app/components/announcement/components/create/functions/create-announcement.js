import API_URL from '../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../user/components/authorize/components/tokens/functions/get-tokens'
import { CREATE_API_ROUTE_DATA, CREATE_WITH_USER_API_ROUTE_DATA, UPDATE_API_ROUTE_DATA } from '../constants/api-route-data.js'
import setConfirmationTokenCookie from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token.js'
import buildUrl from '../../../../../../shared/functions/builders/url.js'

// function sendAnnouncementCreatedEvent() {
//   window.dataLayer.push({ 'event': 'announcement_created' })
// }

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
    if (response.ok) return response.json()
  })
  .then(path => {
    const { changeRoute } = this.context

    changeRoute({ href: buildUrl({ path }) })
    changeControl({ connecting: false })
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
  .then(path => {
    const { changeRoute } = this.context

    changeRoute({ href: buildUrl({ path }) })
    changeControl({ connecting: false })
    // sendAnnouncementCreatedEvent()
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
    const { confirmationToken, path } = jsonResponse
    const { changeRoute } = this.context

    setConfirmationTokenCookie(confirmationToken)
    changeRoute({ href: buildUrl({ path }) })
    changeControl({ connecting: false })

    // sendAnnouncementCreatedEvent()
  })
}

export default createAnnouncement
