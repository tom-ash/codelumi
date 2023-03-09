import API_URL from '../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import {
  CREATE_API_ROUTE_DATA,
  CREATE_WITH_USER_API_ROUTE_DATA,
  UPDATE_API_ROUTE_DATA,
} from '../constants/api-route-data'
import setVerificationToken from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { buildUrl } from '../../../../../../shared/functions/builders/url'

// function sendAnnouncementCreatedEvent() {
//   window.dataLayer.push({ 'event': 'announcement_created' })
// }

function createAnnouncement() {
  const { authorized, renderEdit, setControl } = this.props

  // setControl({ connecting: true })

  if (renderEdit) return update.call(this)
  if (authorized) return create.call(this)

  createWithUser.call(this)
}

function update() {
  const { lang, announcement, setControl } = this.props
  const { method, route } = UPDATE_API_ROUTE_DATA
  const accessToken = getAccessToken()
  const id = window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]

  fetch(API_URL + route + `/${id}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
      'Access-Token': accessToken,
    },
    body: JSON.stringify({ announcement }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(path => {
      const { changeRoute } = this.context

      if (typeof window !== 'undefined') {
        // TODO: Investigate better solution.
        // @ts-ignore
        window.areListingsObsolete = true
      }

      changeRoute({ href: buildUrl({ path }) })
    })
}

function create() {
  const { lang, announcement, setControl } = this.props
  const { method, route } = CREATE_API_ROUTE_DATA
  const accessToken = getAccessToken()

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', Lang: lang, 'Access-Token': accessToken },
    body: JSON.stringify({ announcement }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(path => {
      const { changeRoute } = this.context

      changeRoute({ href: buildUrl({ path }) })
    })
}

function createWithUser() {
  const { lang, announcement, user } = this.props
  const { method, route } = CREATE_WITH_USER_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ announcement, user: { ...user } }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {
      const { verificationToken, path } = jsonResponse
      const { changeRoute } = this.context

      setVerificationToken(verificationToken)
      changeRoute({ href: buildUrl({ path }) })
    })
}

export default createAnnouncement
