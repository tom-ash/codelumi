import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changetaxNumber(taxNumber) {
  this.props.changeControl({ taxNumberConnecting: true })
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/edit/tax_number', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token
    },
    body: JSON.stringify({ taxNumber })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeData({ taxNumber })
      this.props.changeControl({ taxNumberStage: 'success' })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ taxNumberConnecting: true }))
}