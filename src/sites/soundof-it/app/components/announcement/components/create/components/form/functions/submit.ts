import apiUrl from '../../../../../../../../shared/constants/urls/api.js'
import getAccessToken from '../../../../../../../../../mapawynajmu-pl/app/components/user/components/authorize/components/tokens/functions/get-tokens.js'

type submitProps = {
  selectedSkills: Array<any>,
  remote: boolean,
  hybrid: boolean,
  office: boolean
}

const submit = (props: submitProps) => {
  const {
    selectedSkills,
    remote,
    hybrid,
    office
  } = props

  const body = {
    selectedSkills,
    remote,
    hybrid,
    office
  }

  fetch(apiUrl + '/job/create/as-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify(body)
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    // TODO
  })
}

  export default submit
