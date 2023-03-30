import { changeUrl } from "../../../../../../../../shared/app/functions/routes/changers/change-url"
import { fetchApi, FetchMethod } from "../../../../../../../../shared/app/functions/fetch-api/fetch-api"

interface DeleteAsset {
  (id: string): void
}

export const deleteAsset: DeleteAsset = (id) => {
  fetchApi({
    path: `assets/${id}`,
    method: FetchMethod.DELETE,
  })
  .then(() => {
    changeUrl({ href: window.location.href })
  })
}

