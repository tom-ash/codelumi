import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { createSocialImage } from '../components/social-image/functions/create-social-image'
import { validateSkills } from '../components/skill-selector/functions/validate-skills'
import { validateLocation } from '../components/location/functions/validate-location'
import { buildUserObject } from '../../../../../../user/components/new/components/form/components/submit/functions/build-user-object'
import { UserObject } from '../../../../../../user/components/new/components/form/components/submit/types/user-object.interface'
import { validateApplication } from '../components/application/functions/validate-application'
import { validateInputs as validateUserInputs } from '../../../../../../user/components/new/components/form/components/submit/functions/validate-inputs'
import { saveBlob } from '../../../../../../../../../shared/app/components/support/picture-input/functions/save-blob'
import API_URL from '../../../../../../../../shared/constants/urls/api'
import setVerificationToken from '../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { validatePosition } from '../components/position/validators/validate-position'
import { Currency } from '../../../../../postings.types'

var scrollIntoView = require('scroll-into-view')

type SubmitProps = {
  postingId: number | null
  position: string
  positionError: string
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
  b2bCurrency: Currency
  employment: boolean
  employmentMin: number
  employmentMax: number
  employmentCurrency: Currency
  authorized: boolean
  setErrors(params: any): void
  setControl(params: any): void
  formApplicationManner: boolean
  linkApplicationManner: boolean
  applicationLink: string
  applicationLinkError: string
} & UserObject & {
    businessNameError: string
    linkError: string
    logoError: string
    emailError: string
    passwordError: string
    termsOfServiceConsentLabel: string
  }

export const submit = async (props: SubmitProps) => {
  const {
    postingId,
    position,
    positionError,
    lang,
    selectedSkills,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    b2bCurrency,
    employment,
    employmentMax,
    employmentMin,
    employmentCurrency,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
    businessName,
    businessNameError,
    link,
    linkError,
    logo,
    logoError,
    industry,
    email,
    emailError,
    password,
    passwordError,
    termsOfServiceConsent,
    termsOfServiceConsentLabel,
    authorized,
    setErrors,
    setControl,
    formApplicationManner,
    linkApplicationManner,
    applicationLink,
    applicationLinkError,
  } = props

  setControl({ isSubmitting: true })

  const body = {
    postingId,
    position,
    selectedSkills,
    cooperationMode,
    plDescription,
    enDescription,
    b2b,
    b2bMax,
    b2bMin,
    b2bCurrency,
    employment,
    employmentMax,
    employmentMin,
    employmentCurrency,
    placeId,
    placeAutocomplete,
    lat,
    lng,
    country,
    locality,
    sublocality,
    formApplicationManner,
    linkApplicationManner: true,
    applicationLink,
  }

  const validations: (null | string)[] = [
    validateSkills({
      value: selectedSkills,
      errorMessage: 'TODO',
      setErrors,
    }),
    validatePosition({
      value: position,
      errorMessage: positionError,
      setErrors,
    }),
    validateLocation({
      lat,
      lng,
      setErrors,
    }),
    validateApplication({
      formApplicationManner,
      linkApplicationManner: true,
      applicationLink,
      applicationLinkError,
      setErrors,
    }),
  ]

  if (!authorized) {
    validations.push(
      ...validateUserInputs({
        businessName,
        businessNameError,
        link,
        linkError,
        industry,
        email,
        emailError,
        password,
        passwordError,
        termsOfServiceConsent,
        logo,
        logoError,
        setErrors,
      })
    )
  }

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
      email,
      password,
      termsOfServiceConsent,
      termsOfServiceConsentLabel,
      logo,
      setErrors,
    })

    const { database: persistedLogo } = await saveBlob({
      apiUrl: API_URL,
      blob: logo.blob,
      path: 'temporary',
      key: 'logo',
      randomizeKey: true,
      fileType: 'png',
      mimeType: 'image/png',
    })

    // @ts-ignore
    userObject.logo = persistedLogo

    if (!userObject) {
      return
    }
  }

  const socialImageKey = await createSocialImage()
  const bodyWithImage = { ...body, image: socialImageKey }
  const extendedBody = authorized ? bodyWithImage : { ...bodyWithImage, ...userObject }
  const path = authorized ? '/postings' : '/postings/users'
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
    .then(jsonResponse => {
      const { verificationToken, href } = jsonResponse

      setVerificationToken(verificationToken)
      changeUrl({ href })
    })
}
