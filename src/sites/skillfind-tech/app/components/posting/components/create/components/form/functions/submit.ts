import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { createSocialImage } from '../components/social-image/functions/create-social-image'
import { validateSkills } from '../components/skill-selector/functions/validate-skills'
import scrollToElement from '../../../../../../../../../shared/app/functions/screen/scrollers/to-element'
import { validateLocation } from '../components/location/functions/validate-location'
import { buildUserObject } from '../../../../../../user/components/new/components/form/components/submit/functions/build-user-object'
import { UserObject } from '../../../../../../user/components/new/components/form/components/submit/types/user-object.interface'

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
  plDescription: string
  enDescription: string
  b2b: boolean
  b2bMin: number
  b2bMax: number
  employment: boolean
  employmentMin: number
  employmentMax: number
  authorized: boolean
  setErrors(params: any): void
} & UserObject & {
    businessNameError: string
    logoError: string
    termsOfServiceConsentLabel: string
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
    businessName,
    businessNameError,
    industry,
    emailAddress,
    password,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    logo,
    logoError,
    authorized,
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

  let userObject: UserObject | undefined

  if (!authorized) {
    userObject = buildUserObject({
      businessName,
      businessNameError,
      logoError,
      industry,
      emailAddress,
      password,
      termsOfServiceConsent,
      termsOfServiceConsentLabel,
      logo,
      setErrors,
    })

    if (!userObject) {
      return
    }
  }

  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i]
    if (validation) {
      const element = document.getElementById(validation)
      // setControl({ connecting: false })
      scrollToElement(element, 12, -120)
      return
    }
  }

  const socialImageKey = await createSocialImage()
  console.warn('TODO: socialImageKey', socialImageKey)

  const path = authorized ? '/postings' : '/postings/users'
  const extendedBody = authorized ? body : { ...body, ...userObject }

  fetch(`${apiUrl}/${path}`, {
    method: 'POST',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify(extendedBody),
  })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(href => {
      changeUrl({ href })
    })
}
