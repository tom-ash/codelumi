import { getAccessToken } from '../../../../../../app/functions/tokens/getters/get-tokens.js'
import buildPageEditUrl from '../../edit/functions/build-page-edit-url.js'

export function save() {
  const { clientUrl, apiUrl, inputtedName, changeRoute } = this.props

  fetch(apiUrl + '/pages', {
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
    const href = `${clientUrl}/${path}`

    changeRoute({ href })
  })
}
