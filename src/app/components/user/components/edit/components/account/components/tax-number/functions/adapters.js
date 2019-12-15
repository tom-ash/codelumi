import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changetaxNumber(taxNumber) {
  const { connecting, changeControl, changeData } = this.props

  if (connecting) return

  changeControl({ taxNumberConnecting: true })
  fetch(apiUrl + '/user/edit/tax_number', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ taxNumber })
  })
  .then(response => {
    if (response.status == 200) {
      changeData({ taxNumber })
      return changeControl({ taxNumberStage: 'success' })
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ taxNumberConnecting: false }))
}