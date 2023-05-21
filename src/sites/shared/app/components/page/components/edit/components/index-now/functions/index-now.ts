import { getAccessToken } from '../../../../../../user/components/auth/functions/get-access-token'

interface IndexNow {
  (props: {
    id: string
    indexNowApiUrl: string
    setControl: any // TODO
  }): void
}

export const indexNow: IndexNow = props => {
  const {
    id,
    indexNowApiUrl,
    setControl,
  } = props

  const body = JSON.stringify({ id })

  fetch(indexNowApiUrl, {
    method: 'PUT',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
    },
    body,
  })
    .then(response => {
      if (response.status === 200) return response.json()

      throw new Error('Server error at updating page!')
    })
    .then(() => setControl({ connecting: false }))
}
