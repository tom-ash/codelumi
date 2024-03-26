import { ChangeEvent } from 'react'
import { createPictures } from './create-blobs'
import { Picture } from '../../types/picture.interface';

interface SetPicturesInterface {
  (params: {
    e: ChangeEvent<HTMLInputElement>; setInputs(params: any): void;
    limit?: number;
    targetWidth?: number;
    targetHeight?: number;
    pictures: Picture[];
  }): void
}

export const setPictures: SetPicturesInterface = async params => {
  const { e, targetWidth, limit, targetHeight, pictures: currentPictures, setInputs } = params
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
      currentPictures,
    })

    setInputs({ pictures })
  }
}
