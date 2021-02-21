import { getAccessToken } from '../../../../../functions/getters/get-tokens.js'
import buildPageEditUrl from '../../edit/functions/build-page-edit-url.js'

export function save() {
  const { inputtedName, changeUrl } = this.props

  fetch(API_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({ name: inputtedName })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonRespone => {
    const { lang_ver_urls: langVerUrls } = jsonRespone
    const path = buildPageEditUrl({ pageEditData: { name: inputtedName, langVerUrls }, lang: 'pl' })
    const href = `${CLIENT_URL}/${path}`

    changeUrl({ href })
  })
}
