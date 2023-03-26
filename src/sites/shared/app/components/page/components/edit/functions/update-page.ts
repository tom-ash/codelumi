import { getAccessToken } from '../../../../user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../functions/routes/changers/change-url'
import { transformPageBody } from './transform-page-body'

interface UpdatePage {
  (props: {
    updatePageApiUrl: string
    exitOnSave: boolean
    id: string
    url: string
    canonicalUrl: string
    online: boolean
    body: string
    publishedOn: string
    modifiedOn: string
    category: string
    subcategory: string
    title: string
    pageLang: Lang
    langAltsGroup: string
    description: string
    keywords: string
    coverImage: string
    schemaMode: string
    autoSchema: string
    manualSchema: string
    setControl: any // TODO
    setData: any // TODO
  }): void
}

export const updatePage: UpdatePage = (props) => {
  const {
    updatePageApiUrl,
    exitOnSave,
    id,
    url,
    canonicalUrl,
    online,
    body,
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
    setControl,
    setData,
  } = props

  const parsedBody = JSON.parse(body)
  transformPageBody(parsedBody)

  const requestBody = JSON.stringify({
    id,
    url,
    canonicalUrl,
    online,
    body: JSON.stringify(parsedBody),
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    title,
    pageLang,
    langAltsGroup,
    description,
    keywords,
    coverImage,
    schemaMode,
    autoSchema,
    manualSchema,
  })

  fetch(updatePageApiUrl, {
    method: 'PUT',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
    },
    body: requestBody,
  })
    .then(response => {
      if (response.status === 200) return response.json()

      throw new Error('Server error at updating page!')
    })
    .then(jsonResponse => {
      const { href } = jsonResponse

      setData({ updated: true })

      if (!exitOnSave) return

      changeUrl({ href })
    })
    .catch(error => {
      setData({ updated: false })
      console.error(error)
    })
    .finally(() => {
      setControl({ connecting: false })
    })
}
