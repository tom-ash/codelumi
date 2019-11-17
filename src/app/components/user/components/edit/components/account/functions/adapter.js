import { apiUrl } from '../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../authorize/components/tokens/functions/get-tokens'

export function getAccountData() {
  const access_token = getAccessToken()
  fetch(apiUrl + '/user/edit/account_data', {
    headers: {
      'Content-Type': 'application/json',
      access_token
    }
  })
  .then(res => {
    if (res.status == 200) return res.json()
    throw new Error('Network/Server Error')
  })
  .then(json => {
    this.props.changeData({
      businessName: json.businessName, taxNumber: json.taxNumber,
      phoneCode: json.phoneCode, phoneBody: json.phoneBody, email:  json.email
    })
    this.props.changeInputs({ phoneCode: json.phoneCode })
  })
  .catch((error) => { console.dir(error) })
}