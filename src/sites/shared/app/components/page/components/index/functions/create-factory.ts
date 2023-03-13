import { getAccessToken } from '../../../../user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../functions/routes/changers/change-url'

interface CreateFactoryProps {
  apiUrl: string
  buildUrl(props: { path: string }): string
}

const createFactory = (props: CreateFactoryProps) => {
  const { apiUrl, buildUrl } = props

  return () => {
    const accessToken = getAccessToken()

    fetch(`${apiUrl}/page/create`, {
      method: 'POST',
      // @ts-ignore
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken,
        Lang: 'en', // TODO: Get lang from props.
      },
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(path => {
        const href = buildUrl({ path })

        changeUrl({ href })
      })
  }
}

export default createFactory
