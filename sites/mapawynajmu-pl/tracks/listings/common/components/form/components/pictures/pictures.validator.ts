import { Picture } from '../../../../../../../../common/components/support/picture-input/types/picture.interface';
import { PICTURES_ID } from './pictures';

interface PicturesValidatorParams {
  pictures: Picture[];
  setErrors(errors: { isPicturesError: boolean }): void;
}

export const picturesValidator = (
  params: PicturesValidatorParams,
): 'pictures' | null => {
  const { pictures, setErrors } = params;

  if (!pictures || !pictures.length) {
    setErrors({ isPicturesError: true });

    return PICTURES_ID;
  }

  return null;
};
