import API_URL from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'

interface SubmitCountryCodeAndPhoneNumber {
  (args: {
    countryCode: string
    phoneNumber: string
    setControl: any // TODO: TS!
    setInputs: any // TODO: TS!
    setData: any // TODO: TS!
  }): void
}

export const submitCountryCodeAndPhoneNumber: SubmitCountryCodeAndPhoneNumber = args => {
  const { countryCode, phoneNumber, setControl, setInputs, setData } = args
  const accessToken = getAccessToken()
  const body = JSON.stringify({
    countryCode,
    phoneNumber,
  })

  setControl({ phoneConnecting: true })
  fetch(API_URL + '/user/update/phone', {
    method: 'PUT',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
    },
    body,
  }).then(response => {
    if (response.status == 200) {
      setData({ countryCodeAndPhoneNumberCellValue: `${countryCode} ${phoneNumber}` })
      setInputs({ countryCode, phoneNumber })
      setControl({ connecting: false, countryCodeAndPhoneNumberCellOpened: false })

      return
    }

    throw new Error('Server Error')
  })
}
