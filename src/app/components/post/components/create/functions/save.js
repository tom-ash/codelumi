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

  let parsedPl = null
  if (unparsedPl) {
    parsedPl = { ...unparsedPl }
    parsedPl.body = JSON.parse(unparsedPl.body)
    parsedPl.meta = JSON.parse(unparsedPl.meta)
  }

  let parsedEn = null
  if (unparsedEn) {
    parsedEn = { ...unparsedEn }
    parsedEn.body = JSON.parse(unparsedEn.body)
    parsedEn.meta = JSON.parse(unparsedEn.meta)
  }

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
    changeShowData(jsonRespone)
    changeRender({ create: false })
    resetInputs()
  })
}
