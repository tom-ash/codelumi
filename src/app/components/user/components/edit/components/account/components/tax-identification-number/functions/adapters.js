import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getUserToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changeTaxIdentification(taxIdentification) {
  this.props.changeControl({ taxIdentificationConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/tax_identification', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      uT
    },
    body: JSON.stringify({ tax_identification: taxIdentification })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeData({ taxIdentification })
      this.props.changeControl({ taxIdentificationStage: 'success' })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ taxIdentificationConnecting: true }))
}