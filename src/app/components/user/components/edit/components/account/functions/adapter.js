import { apiUrl } from '../../../../../../../constants/urls.js'
import { getTokens } from '../../../../authorize/components/tokens/functions/get-tokens'

export function getAccountData() {
  const [ UST, UAT ] = getTokens()
  fetch(apiUrl + '/user/edit/account_data', {
    headers: { 'Content-Type': 'application/json', UST, UAT }
  })
  .then(res => {
    if (res.status == 200) return res.json()
    throw new Error('Network/Server Error')
  })
  .then(jsonRes => {
    this.props.changeData({
      businessName: jsonRes.businessName, taxIdentification: jsonRes.taxIdentification,
      phoneCountryCode: jsonRes.phoneCountryCode, phoneBody: jsonRes.phoneBody, email:  jsonRes.email
    })
    this.props.changeInputs({ phoneCountryCode: jsonRes.phoneCountryCode })
  })
  .catch((error) => { console.dir(error) })
}