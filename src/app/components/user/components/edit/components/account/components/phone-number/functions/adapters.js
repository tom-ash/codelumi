import { apiUrl } from '../../../../../../../../../constants/urls.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function changePhone(phoneCode, body) {
  const { changeControl, changeData, changeInputs, connecting } = this.props

  if (connecting) return

  changeControl({ phoneConnecting: true })
  fetch(apiUrl + '/user/edit/phone', {
    method: 'PUT', headers: { 'Content-Type': 'application/json', access_token: getAccessToken() },
    body: JSON.stringify({ phone_code: phoneCode, body })
  })
  .then(response => {
    if (response.status == 200) {
      changeData({ phoneCode: phoneCode, phoneBody: body })
      changeInputs({ phoneCode: phoneCode })
      return changeControl({ phoneStage: 'success' })
    }
    throw new Error('SomethingWentWrong')
  })
  .catch((error) => console.dir(error))
  .finally(() => changeControl({ phoneConnecting: false }))
}