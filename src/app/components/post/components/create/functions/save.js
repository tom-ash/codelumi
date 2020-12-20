import { getAccessToken } from '../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function save() {
  const {
    changeShowData,
    resetInputs,
    changeRender,
    name,
    inputs
  } = this.props

  const {
    pl: unparsedPl,
    en: unparsedEn
  } = inputs

  const parsedPl = { ...unparsedPl }
  parsedPl.body = JSON.parse(unparsedPl.body)

  const parsedEn = { ...unparsedEn }
  parsedEn.body = JSON.parse(unparsedEn.body)

  fetch(API_URL + '/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken()
    },
    body: JSON.stringify({
      name,
      pl: parsedPl,
      en: parsedEn
    })
  })
  .then(response => {
    if (response.status == 201) return response.json()
  })
  .then(jsonRespone => {

    console.log(jsonRespone)

    changeRender({ create: false  })
    changeShowData(jsonRespone)
    resetInputs()
  })
}
