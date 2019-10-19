import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getUserToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changePhone(countryCode, body) {
  this.props.changeControl({ phoneConnecting: true })
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/phone', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      uT
    },
    body: JSON.stringify({ country_code: countryCode, body })
  })
  .then(response => {
    if (response.status == 200) {
      this.props.changeData({ phoneCountryCode: countryCode, phoneBody: body })
      this.props.changeInputs({ phoneCountryCode: countryCode })
      this.props.changeControl({ phoneStage: 'success' })
      return
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => this.props.changeControl({ phoneConnecting: false }))
}