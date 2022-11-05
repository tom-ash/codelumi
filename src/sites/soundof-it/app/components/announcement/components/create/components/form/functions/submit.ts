import apiUrl from '../../../../../../../../shared/constants/urls/api'
import getAccessToken from '../../../../../../../../../mapawynajmu-pl/app/components/user/components/auth/components/tokens/functions/get-tokens'

type submitProps = {
  selectedSkills: Array<any>
  remote: boolean
  hybrid: boolean
  office: boolean
  b2b: boolean
  b2bMax: number
  b2bMin: number
  employment: boolean
  employmentMax: number
  employmentMin: number
  civilContract: boolean
  civilContractMax: number
  civilContractMin: number
}

const submit = (props: submitProps) => {
  const {
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  } = props

  const body = {
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  }

  fetch(apiUrl + '/job/create/as-user', {
    method: 'POST',
    // @ts-ignore
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(jsonResponse => {
      // TODO
    })
}

export default submit
