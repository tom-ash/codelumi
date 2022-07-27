import getAccessToken from '../../../../../../../mapawynajmu-pl/app/components/user/components/authorize/components/tokens/functions/get-tokens'

interface CreateFactoryProps {
  apiUrl: string,
  changeRoute(props: { href: string }): void,
  imageKey: string,
  buildUrl(props: { path: string}): string
}

const createFactory = (props: CreateFactoryProps) => {
  const { apiUrl, changeRoute, imageKey, buildUrl } = props

  return (
    () => {
      const href = buildUrl({ path: `images/${imageKey}` })
      const accessToken = getAccessToken()

      fetch(`${apiUrl}/image/create`, {
        method: 'POST',
        // @ts-ignore
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': accessToken
        },
        body: JSON.stringify({
          imageKey
        })
      })
      .then(() => {
        changeRoute({ href })
      })
    }
  )
}

export default createFactory