import getCookieValue from '../../cookies/getters/get-cookie-value'

function getAccessToken() {
  return getCookieValue('access_token')
}

export default getAccessToken
