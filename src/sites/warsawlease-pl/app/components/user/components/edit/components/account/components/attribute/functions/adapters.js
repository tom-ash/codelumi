import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { getAccessToken } from '../../../../../../authorize/components/tokens/functions/get-tokens'

export function sendNewValue(value) {
  const {
    api_suffix,
    connecting,
    changeControl,
    changeData,
    inputName
  } = this.props

  if (connecting) return

  changeControl({ [`${inputName}Connecting`]: true })

  fetch(API_URL + `/user/edit/${api_suffix}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      access_token: getAccessToken()
    },
    body: JSON.stringify({ [`${inputName}`]: value })
  })
  .then(response => {
    if (response.status == 200) {
      changeControl({ [`${inputName}Stage`]: 'success' })
      return changeData({ [`${inputName}`]: value })
    }
    throw new Error('SomethingWentWrong')
  })
  .catch(error => console.dir(error))
  .finally(() => changeControl({ [`${inputName}Connecting`]: false }))
}