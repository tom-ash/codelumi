import { ChangeEvent } from 'react'
import { createPictures } from './create-blobs'
import { Picture } from '../../../types/picture.interface'
import { SetPictures } from '../../../types/set-pictures.interface'

interface SetPicturesInterface {
  (params: {
    e: ChangeEvent<HTMLInputElement>
    limit?: number
    targetWidth?: number
    targetHeight?: number
    maxWidth?: number
    maxHeight?: number
    pictures: Picture[]
    setPictures: SetPictures
  }): void
}

export const buildPicturesFromFiles: SetPicturesInterface = async params => {
  const { e, targetWidth, limit, targetHeight, pictures: currentPictures, setPictures, maxWidth, maxHeight } = params
  const pictureFiles = e.target.files

  if (pictureFiles) {
    let arrayedPictureFiles = Array.from(pictureFiles)

    if (limit) {
      const unusedLimit = limit - currentPictures.length

      if (unusedLimit <= 0) {
        return
      }

      arrayedPictureFiles = arrayedPictureFiles.slice(0, unusedLimit)
    }

    const pictures = await createPictures({
      files: arrayedPictureFiles,
      targetWidth,
      targetHeight,
      maxWidth,
      maxHeight,
      currentPictures,
    })

    setPictures(pictures)
  }
}
