import { Picture } from "../../../types/picture.interface";
import { SetPictures } from "../../../types/set-pictures.interface";

interface MovePicture {
  (params: {
    pictures: Picture[];
    direction: 'up' | 'down';
    index: number;
    setPictures: SetPictures;
  }): void
}

export const movePicture: MovePicture = (params) => {
  const {
    pictures,
    direction,
    index,
    setPictures
  } = params

  const destination = direction === 'up' ? index - 1 : index + 1
  if (destination < 0 || destination === pictures.length) return

  const newPictures = [...pictures]
  const movedPicture = newPictures.splice(index, 1)[0]

  newPictures.splice(destination, 0, movedPicture)

  setPictures(newPictures)
}
