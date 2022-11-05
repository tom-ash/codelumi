import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import getAccessToken from '../../../../../../auth/components/tokens/functions/get-tokens'

export function changePhone(countryCode, body) {
  const { changeControl, changeData, changeInputs, connecting } = this.props

  if (connecting) return

  changeControl({ phoneConnecting: true })
  fetch(API_URL + '/user/update/phone', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ country_code: countryCode, phone_number: body }),
  })
    .then(response => {
      if (response.status == 200) {
        changeData({ countryCode: countryCode, phoneNumber: body })
        changeInputs({ countryCode: countryCode })
        return changeControl({ phoneStage: 'success' })
      }
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => changeControl({ phoneConnecting: false }))
}
