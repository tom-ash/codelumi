import { Picture } from '../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'
import AWS_S3_URL from '../../../../../../../../shared/constants/urls/aws-s3'

interface SetPictures {
  (params: {
    listingId: number
    currentPictures: {
      database: string
    }[]
    setInputs(params: { pictures: Picture[] }): void
  }): void
}

export const setBlobs: SetPictures = async params => {
  const { listingId, currentPictures, setInputs } = params

  const pictures = await Promise.all(
    currentPictures.map(async (picture: { database: string }) => {
      const { database } = picture
      const key = `announcements/${listingId}/${database}`
      const response = await fetch(`${AWS_S3_URL}/${key}`, {
        method: 'GET',
        headers: {
          // https://stackoverflow.com/questions/76669136/axios-get-from-s3-no-access-control-allow-origin
          'Cache-Control': 'no-cache',
        },
      })
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)

      return {
        blob,
        objectUrl,
        database,
      }
    })
  )

  setInputs({ pictures })
}
