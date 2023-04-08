import { getAccessToken } from '../../components/user/components/auth/functions/get-access-token'

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface FetchApi {
  (args: { path: string; method: FetchMethod; body?: any }): Promise<any>
}

export const fetchApi: FetchApi = args => {
  const { path, method, body } = args
  // @ts-ignore
  const apiUrl = window.apiUrl
  // @ts-ignore
  const lang = window.lang

  return fetch(`${apiUrl}/${path}`, {
    method,
    // @ts-ignore
    headers: {
      'Access-Token': getAccessToken(),
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify(body),
  }).then((response: Response) => {
    if (response.ok) {
      return response.json()
    }
  })
}
