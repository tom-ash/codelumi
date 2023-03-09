import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../mapawynajmu-pl/app/components/user/components/auth/functions/get-access-token'

type submitProps = {
  lang: Lang
  selectedSkills: Array<any>
  changeRoute: ChangeRoute
  // remote: boolean
  // hybrid: boolean
  // office: boolean
  b2b: boolean
  b2bMax: number
  b2bMin: number
  // employment: boolean
  // employmentMax: number
  // employmentMin: number
  // civilContract: boolean
  // civilContractMax: number
  // civilContractMin: number
}

export const submit = (props: submitProps) => {
  const {
    lang,
    selectedSkills,
    changeRoute,
    // remote,
    // hybrid,
    // office,
    b2b,
    b2bMax,
    b2bMin,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
  } = props

  const body = {
    selectedSkills,
    // remote,
    // hybrid,
    // office,
    b2b,
    b2bMax,
    b2bMin,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
  }

  fetch(apiUrl + '/job/create/as-user', {
    method: 'POST',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      'Lang': lang,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => {
      changeRoute({ href })
    })
}
