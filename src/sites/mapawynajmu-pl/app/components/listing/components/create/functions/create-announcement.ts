import API_URL from '../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import {
  CREATE_API_ROUTE_DATA,
  CREATE_WITH_USER_API_ROUTE_DATA,
  UPDATE_API_ROUTE_DATA,
} from '../constants/api-route-data'
import setVerificationToken from '../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { changeUrl } from '../../../../../../../shared/app/functions/routes/changers/change-url'
import { savePictures } from '../components/pictures/functions/save-pictures'
import { createSocialImage } from '../../../../../../../shared/app/components/support/social-image-canvas/functions/create-social-image'

async function createAnnouncement() {
  // @ts-ignore
  const { authorized, renderEdit, pictures } = this.props

  const savedPictures = await savePictures(pictures)

  await createSocialImage({ apiUrl: API_URL })

  // @ts-ignore
  if (renderEdit) return update.call(this, savedPictures)
  // @ts-ignore
  if (authorized) return create.call(this, savedPictures)

  // @ts-ignore
  createWithUser.call(this, savedPictures)
}

// @ts-ignore
function update(savedPictures) {
  // @ts-ignore
  const { lang, announcement } = this.props
  const { method, route } = UPDATE_API_ROUTE_DATA
  const accessToken = getAccessToken()
  // @ts-ignore
  const id = window.location.pathname.match(/(edytuj-ogloszenie|edit-announcement)\/(\d+)/)[2]

  fetch(API_URL + route + `/${id}`, {
    method,
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
      'Access-Token': accessToken,
    },
    body: JSON.stringify({ announcement: { ...announcement, pictures: savedPictures } }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => changeUrl({ href }))
}

// @ts-ignore
async function create(savedPictures) {
  // @ts-ignore
  const { lang, announcement } = this.props
  const { method, route } = CREATE_API_ROUTE_DATA
  const accessToken = getAccessToken()

  fetch(API_URL + route, {
    method,
    // @ts-ignore
    headers: { 'Content-Type': 'application/json', Lang: lang, 'Access-Token': accessToken },
    body: JSON.stringify({ announcement: { ...announcement, pictures: savedPictures } }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => changeUrl({ href }))
}

// @ts-ignore
function createWithUser(savedPictures) {
  // @ts-ignore
  const { lang, announcement, user } = this.props
  const { method, route } = CREATE_WITH_USER_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ announcement: { ...announcement, pictures: savedPictures }, user }),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {
      const { verificationToken, href } = jsonResponse

      setVerificationToken(verificationToken)
      changeUrl({ href })
    })
}

export default createAnnouncement
