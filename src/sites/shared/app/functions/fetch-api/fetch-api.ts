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

export const fetchApi: FetchApi = async args => {
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

interface PostApi {
  (args: { path: string; body: any }): Promise<any>
}

export const postApi: PostApi = args => {
  const { path, body } = args

  return fetchApi({
    path,
    method: FetchMethod.POST,
    body,
  })
}

interface Patch {
  (args: { path: string; body: any }): Promise<any>
}

export const patch: Patch = args => {
  const { path, body } = args

  return fetchApi({
    path,
    method: FetchMethod.PATCH,
    body,
  })
}

interface Delete {
  (args: { path: string }): Promise<any>
}

export const deleteApi: Delete = async args => {
  const { path } = args

  return fetchApi({
    path,
    method: FetchMethod.DELETE,
  })
}
