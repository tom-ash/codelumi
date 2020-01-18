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
    const {
      firstName,
      lastName,
      businessName,
      taxNumber,
      phoneCode,
      phoneBody,
      email
    } = json

    this.props.changeData({
      firstName,
      lastName,
      businessName,
      taxNumber,
      phoneCode,
      phoneBody,
      email
    })

    this.props.changeInputs({ phoneCode: json.phoneCode })
  })
  .catch((error) => { console.dir(error) })
}