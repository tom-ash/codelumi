import { Picture } from "../../types/picture.interface";

interface MovePicture {
  (params: {
    pictures: Picture[];
    direction: 'up' | 'down';
    index: number;
    setInputs(params: { pictures: Picture[] }): void;
  }): void
}

export const movePicture: MovePicture = (params) => {
  const {
    pictures,
    direction,
    index,
    setInputs
  } = params

  const destination = direction === 'up' ? index - 1 : index + 1
  if (destination < 0 || destination === pictures.length) return

  const newPictures = [...pictures]
  const movedPicture = newPictures.splice(index, 1)[0]

  newPictures.splice(destination, 0, movedPicture)

  setInputs({ pictures: newPictures })
}
