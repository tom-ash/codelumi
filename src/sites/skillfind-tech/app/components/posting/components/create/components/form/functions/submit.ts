import apiUrl from '../../../../../../../../shared/constants/urls/api'
import { getAccessToken } from '../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { createSocialImage } from '../components/social-image/functions/create-social-image'

// import transformCanvasToBlob from '../../../../../../../../../shared/app/components/image/components/edit/functions/transform-canvas-to-blob';
// import drawOnCanvas from '../../../../../../../../../shared/app/components/image/components/edit/functions/draw-on-canvas';
// import compress from '../../../../../../../../../shared/app/components/image/components/edit/functions/compress';

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
  description: string;
  b2b: boolean
  b2bMin: number
  b2bMax: number
  employment: boolean
  employmentMin: number
  employmentMax: number
}

export const submit = async (props: SubmitProps) => {
  const {
    lang,
    selectedSkills,
    cooperationMode,
    description,
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
  } = props

  const body = {
    selectedSkills,
    cooperationMode,
    description,
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
