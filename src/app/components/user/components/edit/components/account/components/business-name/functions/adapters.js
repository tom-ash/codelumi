import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changeBusinessName(businessName) {
  this.props.changeControl({ businessNameConnecting: true })
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/edit/business_name', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ business_name: businessName })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeControl({ businessNameStage: 'success' })
      this.props.changeData({ businessName })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ businessNameConnecting: true }))
}