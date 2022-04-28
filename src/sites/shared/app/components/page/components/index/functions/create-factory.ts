import getAccessToken from '../../../../../../../mapawynajmu-pl/app/components/user/components/authorize/components/tokens/functions/get-tokens'

interface CreateFactoryProps {
  pageKey: string,
  apiUrl: string,
  changeRoute(props: { href: string }): void,
  buildUrl(props: { path: string}): string
}

const createFactory = (props: CreateFactoryProps) => {
  const {
    pageKey,
    apiUrl,
    buildUrl,
    changeRoute
  } = props

  return (
    () => {
      const href = buildUrl({ path: `pages/${pageKey}` })
      const accessToken = getAccessToken()

      fetch(`${apiUrl}/page/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': accessToken
        },
        body: JSON.stringify({ pageKey })
      })
      .then(() => {
        changeRoute({ href })
      })
    }
  )
}

export default createFactory