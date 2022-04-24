import getAccessToken from '../../../../../../../mapawynajmu-pl/app/components/user/components/authorize/components/tokens/functions/get-tokens'

interface CreateFactoryProps {
  apiUrl: string,
  changeRoute(props: { href: string }): void,
  imageKey: string,
  buildUrl(props: { path: string}): string
}

const createFactory = (props: CreateFactoryProps) => {
  const { apiUrl, changeRoute, imageKey, buildUrl } = props
  const accessToken = getAccessToken()
  const href = buildUrl({ path: `edit-image/${imageKey}` })

  return (
    () => {
      fetch(`${apiUrl}/image/create`, {
        method: 'POST',
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