import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'

export function changePhone(countryCode, body) {
  const { setControl, setData, setInputs, connecting } = this.props

  if (connecting) return

  setControl({ phoneConnecting: true })
  fetch(API_URL + '/user/update/phone', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ country_code: countryCode, phone_number: body }),
  })
    .then(response => {
      if (response.status == 200) {
        setData({ countryCode: countryCode, phoneNumber: body })
        setInputs({ countryCode: countryCode })
        return setControl({ phoneStage: 'success' })
      }
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ phoneConnecting: false }))
}
