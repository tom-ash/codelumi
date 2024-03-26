import { Picture } from "../../types/picture.interface"

interface RotatePicture {
  (params: {
    pictures: Picture[];
    index: number;
    setInputs(params: { pictures: Picture[] }): void
  }): void;
}

export const deletePicture: RotatePicture = async (params) => {
  const { pictures, index: pictureToDeleteIndex, setInputs } = params

  const newPictures = pictures.filter((picture, index) => {
    return index !== pictureToDeleteIndex
  })

  setInputs({ pictures: newPictures })
}
