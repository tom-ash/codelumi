import { changeUrl } from '../../../../../../functions/routes/changers/change-url'
import { fetchApi, FetchMethod } from '../../../../../../functions/fetch-api/fetch-api'

interface DeleteAsset {
  (id: string): void
}

export const deleteAsset: DeleteAsset = id => {
  fetchApi({
    path: `redirects/${id}`,
    method: FetchMethod.DELETE,
  }).then(() => {
    changeUrl({ href: window.location.href })
  })
}
