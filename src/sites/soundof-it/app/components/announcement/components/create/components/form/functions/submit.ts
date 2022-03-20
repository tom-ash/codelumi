import apiUrl from '../../../../../../../../shared/constants/urls/api.js'

type submitProps = {
  selectedSkills: Array<any>
}

const submit = (props: submitProps) => {
  const { selectedSkills } = props
  const body = { selectedSkills }

  fetch(apiUrl + '/job/create/as-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    console.log(jsonResponse)
  })
}

  export default submit
