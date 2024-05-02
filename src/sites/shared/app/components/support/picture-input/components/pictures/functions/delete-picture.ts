import { Picture } from '../../../types/picture.interface'
import { SetPictures } from '../../../types/set-pictures.interface'

interface RotatePicture {
  (params: { pictures: Picture[]; index: number; setPictures: SetPictures }): void
}

export const deletePicture: RotatePicture = async params => {
  const { pictures, index: pictureToDeleteIndex, setPictures } = params

  const newPictures = pictures.filter((picture, index) => {
    return index !== pictureToDeleteIndex
  })

  setPictures(newPictures)
}
