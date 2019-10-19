import { apiUrl } from '../../../../../../../constants/urls.js'
import { getUserToken } from '../../../../authorize/components/tokens/functions/get-tokens'

export function getAccountData() {
  const uT = getUserToken()
  fetch(apiUrl + '/user/edit/account_data', {
    headers: {
      'Content-Type': 'application/json',
      uT
    }
  })
  .then(res => {
    if (res.status == 200) return res.json()
    throw new Error('Network/Server Error')
  })
  .then(json => {
    this.props.changeData({
      businessName: json.businessName, taxIdentification: json.taxIdentification,
      phoneCountryCode: json.phoneCountryCode, phoneBody: json.phoneBody, email:  json.email
    })
    this.props.changeInputs({ phoneCountryCode: json.phoneCountryCode })
  })
  .catch((error) => { console.dir(error) })
}