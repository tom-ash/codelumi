import apiUrl from '../../../../../../../../shared/constants/urls/api.js'
// import getCookieValue from
import getAccessToken from '../../../../../../../../../mapawynajmu-pl/app/components/user/components/authorize/components/tokens/functions/get-tokens.js'

// import getCookieValue

// import getAccessToken from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

type submitProps = {
  selectedSkills: Array<any>
}

const submit = (props: submitProps) => {
  const { selectedSkills } = props
  const body = { selectedSkills }

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
