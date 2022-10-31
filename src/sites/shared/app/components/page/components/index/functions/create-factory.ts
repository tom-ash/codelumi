import getAccessToken from '../../../../../../../mapawynajmu-pl/app/components/user/components/auth/components/tokens/functions/get-tokens'

interface CreateFactoryProps {
  apiUrl: string
  changeRoute(props: { href: string }): void
  buildUrl(props: { path: string }): string
}

const createFactory = (props: CreateFactoryProps) => {
  const { apiUrl, buildUrl, changeRoute } = props

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

        changeRoute({ href })
      })
  }
}

export default createFactory
