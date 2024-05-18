import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { createSocialImage } from '../components/social-image/functions/create-social-image'
import { validateSkills } from '../components/skill-selector/functions/validate-skills'
import { validateLocation } from '../components/location/functions/validate-location'
import { buildUserObject } from '../../../../../../user/components/new/components/form/components/submit/functions/build-user-object'
import { UserObject } from '../../../../../../user/components/new/components/form/components/submit/types/user-object.interface'
import { validateApplication } from '../components/application/functions/validate-application'

var scrollIntoView = require('scroll-into-view')

type SubmitProps = {
  postingId: number | null
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
  setControl(params: any): void
  backgroundColor: string
  textColor: string

  formApplicationManner: boolean
  linkApplicationManner: boolean
  applicationLink: string
  applicationLinkError: string
} & UserObject & {
    businessNameError: string
    logoError: string
    termsOfServiceConsentLabel: string
  }

export const submit = async (props: SubmitProps) => {
  const {
    postingId,
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
    setControl,
    backgroundColor,
    textColor,
    formApplicationManner,
    linkApplicationManner,
    applicationLink,
    applicationLinkError,
  } = props

  setControl({ isSubmitting: true })

  const body = {
    postingId,
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
    backgroundColor,
    textColor,
    formApplicationManner,
    linkApplicationManner,
    applicationLink,
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
    validateApplication({
      formApplicationManner,
      linkApplicationManner,
      applicationLink,
      applicationLinkError,
      setErrors,
    })
  ]

  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i]
    if (validation) {
      const element = document.getElementById(validation)

      setControl({ isSubmitting: false })

      scrollIntoView(element)

      return
    }
  }

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

  const socialImageKey = await createSocialImage()
  console.warn('TODO: socialImageKey', socialImageKey)

  const path = authorized ? '/postings' : '/postings/users'
  const extendedBody = authorized ? body : { ...body, ...userObject }
  const method = postingId ? 'PUT' : 'POST'

  fetch(`${apiUrl}/${path}`, {
    method,
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
