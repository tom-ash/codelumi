import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changeBusinessName(businessName) {
  const { connecting, changeControl, changeData } = this.props
  const access_token = getAccessToken()

  if (connecting) return

  changeControl({ businessNameConnecting: true })
  fetch(apiUrl + '/user/edit/business_name', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', access_token },
    body: JSON.stringify({ business_name: businessName })
  })
  .then(response => {
    if (response.status == 200) {
      changeControl({ businessNameStage: 'success' })
      return changeData({ businessName })
    }
    throw new Error('SomethingWentWrong')
  })
  .catch(error => console.dir(error))
  .finally(() => changeControl({ businessNameConnecting: false }))
}