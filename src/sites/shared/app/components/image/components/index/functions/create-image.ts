import { getAccessToken } from '../../../../user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../functions/routes/changers/change-url'

interface CreateImage {
  (args: {
    lang: Lang
    apiUrl: string
    recordKey: string
  }): void
}

export const createImage: CreateImage = (props) => {
  const { lang, apiUrl, recordKey } = props
  const accessToken = <string>getAccessToken()
  const body = {
    imageKey: recordKey,
  }

  console.log(body)

  fetch(`${apiUrl}/image/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
      'Lang': lang,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {

      console.log(jsonResponse)

      // const { href } = jsonResponse

      // changeUrl({ href })
    })
}
