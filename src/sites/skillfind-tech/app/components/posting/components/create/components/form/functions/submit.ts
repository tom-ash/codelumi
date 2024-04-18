import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { createSocialImage } from '../components/social-image/functions/create-social-image'
import { validateSkills } from '../components/skill-selector/functions/validate-skills'
import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { validateLocation } from '../components/location/functions/validate-location'

type SubmitProps = {
  lang: Lang
  selectedSkills: Array<any>
  cooperationMode: string
  placeAutocomplete: string
  lat: number
  lng: number
  placeId: string
  country: string | undefined
  locality: string | undefined
  sublocality: string | undefined
  plDescription: string;
  enDescription: string;
  b2b: boolean
  b2bMin: number
  b2bMax: number
  employment: boolean
  employmentMin: number
  employmentMax: number
  setErrors(params: any): void;
}

export const submit = async (props: SubmitProps) => {
  const {
    lang,
    selectedSkills,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
    setErrors,
  } = props

  const body = {
    selectedSkills,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
  }

  const validations = [
    validateSkills({
      value: selectedSkills,
      errorMessage: 'TODO',
      setErrors,
    }),
    validateLocation({
      lat,
      lng,
      setErrors,
    }),
  ]

  for(let i = 0; i < validations.length; i++) {
    const validation = validations[i]
    if (validation) {
      const element = document.getElementById(validation)
      // setControl({ connecting: false })
      scrollToElement(element, 12, -120)
      return
    }
  }

  const socialImageKey = await createSocialImage()

  // TODO: Send socialImageKey.

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
