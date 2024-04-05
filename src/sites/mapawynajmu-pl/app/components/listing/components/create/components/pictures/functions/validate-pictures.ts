import { Picture } from "../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface";
import { PICTURES_ID } from "../pictures";

interface ValidatePictures {
  (params: {
    pictures: Picture[];
    setErrors(errors: { isPicturesError: boolean }): void;
  }): 'pictures' | null;
}

export const validatePictures: ValidatePictures = (params) => {
  const {
    pictures,
    setErrors,
  } = params

  if (!pictures || !pictures.length) {
    setErrors({ isPicturesError: true })

    return PICTURES_ID;
  }

  return null
}
