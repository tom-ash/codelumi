import API_URL from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'

interface SubmitBusinessName {
  (args: {
    businessName: string
    setControl(args: { connecting: false; businessNameCellOpened: false }): void
    setInputs(args: { businessName: string }): void
    setData(args: { businessNameCellValue: string }): void
  }): void
}

export const submitBusinessName: SubmitBusinessName = args => {
  const { businessName, setControl, setInputs, setData } = args
  const accessToken = getAccessToken()
  const body = JSON.stringify({
    value: businessName,
  })

  fetch(API_URL + '/user/update/business_name', {
    method: 'PATCH',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': accessToken,
    },
    body,
  }).then(response => {
    if (response.status == 200) {
      setData({ businessNameCellValue: businessName })
      setInputs({ businessName })
      setControl({ connecting: false, businessNameCellOpened: false })

      return
    }

    throw new Error('Server Error')
  })
}
