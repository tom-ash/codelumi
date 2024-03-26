import API_URL from '../../../../../../../../shared/constants/urls/api'
import { Picture } from "../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface"
import { saveBlob } from "../../../../../../../../../shared/app/components/support/picture-input/functions/save-blob"

export const savePictures = async (pictures: Picture[]) => {
  const savedPictures = await Promise.all(
    pictures.map(async (picture: Picture) => {
      const {
        blob,
        database
      } = picture

      if (database) {
        return ({
          blob,
          database,
        })
      }

      return await saveBlob({
        apiUrl: API_URL,
        blob,
        path: 'temporary',
        key: '',
        randomizeKey: true,
        fileType: 'png',
        mimeType: 'image/png',
      })
    })
  )

  return savedPictures;
}