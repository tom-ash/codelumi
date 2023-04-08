import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { fetchApi, FetchMethod } from '../../../../../../../../shared/app/functions/fetch-api/fetch-api'

export const createAsset = () => {
  fetchApi({
    path: 'assets',
    method: FetchMethod.POST,
  }).then(() => {
    changeUrl({ href: window.location.href })
  })
}
