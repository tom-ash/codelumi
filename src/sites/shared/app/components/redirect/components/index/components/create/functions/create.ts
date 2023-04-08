import { changeUrl } from '../../../../../../../functions/routes/changers/change-url'
import { fetchApi, FetchMethod } from '../../../../../../../functions/fetch-api/fetch-api'

export const createAsset = () => {
  fetchApi({
    path: 'redirects',
    method: FetchMethod.POST,
  }).then(() => {
    changeUrl({ href: window.location.href })
  })
}
