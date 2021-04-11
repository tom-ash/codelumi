import getCookieValue from '../../cookies/getters/get-cookie-value.js'

function getAccessToken() {
  return getCookieValue('access_token')
}

export default getAccessToken
