import { getAccessToken } from '../../../../user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../functions/routes/changers/change-url'

interface CreatePage {
  (args: {
    lang: Lang
    apiUrl: string
    // imageKey: string
  }): void
}

export const createPage: CreatePage = (props) => {
  const { lang, apiUrl } = props
  const accessToken = <string>getAccessToken()
  // const body = {
  //   imageKey
  // }

  // console.log(props)

  // console.log(imageKey)

  fetch(`${apiUrl}/page/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
      'Lang': lang,
    },
    // body: JSON.stringify(body)
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {
      const { href } = jsonResponse

      changeUrl({ href })
    })
}
