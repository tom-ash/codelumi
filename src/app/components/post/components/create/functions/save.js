import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function save() {
  const {
    changePostIndexData,
    resetInputs,
    posts,
    name,
    meta,
    url,
    title,
    body
  } = this.props

  fetch(API_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({
      name,
      meta,
      url,
      title,
      body 
    })
  })
  .then(response => {
    if (response.status == 201) return response.json()
  })
  .then(jsonRespone => {
    changePostIndexData({
      posts: {
        ...posts,
        [name]: {
          name,
          meta,
          url,
          title,
          body
        }
      }
    })
    resetInputs()
  })
}
