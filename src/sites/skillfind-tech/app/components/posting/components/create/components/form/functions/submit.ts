import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

type SubmitProps = {
  lang: Lang
  businessName: string
  selectedSkills: Array<any>
  // remote: boolean
  // hybrid: boolean
  // office: boolean
  b2b: boolean
  b2bMax: number
  b2bMin: number
  industry: string
  // employment: boolean
  // employmentMax: number
  // employmentMin: number
  // civilContract: boolean
  // civilContractMax: number
  // civilContractMin: number
  placeId: string
  placeAutocomplete: string
  lat: number
  lng: number
  country: string | undefined
  locality: string | undefined
  sublocality: string | undefined
}

export const submit = (props: SubmitProps) => {
  const {
    lang,
    businessName,
    selectedSkills,
    // remote,
    // hybrid,
    // office,
    b2b,
    b2bMax,
    b2bMin,
    industry,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  } = props

  const body = {
    businessName,
    selectedSkills,
    // remote,
    // hybrid,
    // office,
    b2b,
    b2bMax,
    b2bMin,
    industry,
    // employment,
    // employmentMax,
    // employmentMin,
    // civilContract,
    // civilContractMax,
    // civilContractMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  }

  fetch(apiUrl + '/postings', {
    method: 'POST',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => {
      changeUrl({ href })
    })
}
