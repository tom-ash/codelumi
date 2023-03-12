import { getAccessToken } from '../../../../user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../functions/routes/changers/route-generic'

interface CreateFactoryProps {
  apiUrl: string
  imageKey: string
  buildUrl(props: { path: string }): string
}

const createFactory = (props: CreateFactoryProps) => {
  const { apiUrl, imageKey, buildUrl } = props

  return () => {
    const href = buildUrl({ path: `images/${imageKey}` })
    const accessToken = getAccessToken()

    fetch(`${apiUrl}/image/create`, {
      method: 'POST',
      // @ts-ignore
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken,
      },
      body: JSON.stringify({
        imageKey,
      }),
    }).then(() => {
      changeUrl({ href })
    })
  }
}

export default createFactory
