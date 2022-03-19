import apiUrl from '../../../../../../../../shared/constants/urls/api.js'

const submit = () => {
  fetch(apiUrl + '/job/create/as-user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ test: 'test' })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    console.log(jsonResponse)
  })
}

  export default submit
