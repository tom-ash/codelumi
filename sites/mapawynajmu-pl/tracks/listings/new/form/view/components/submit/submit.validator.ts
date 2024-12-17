import {
  SetControl,
  SetErrors,
} from '../../../../../../../../../lib/types/setters';
import { Picture } from '../../../../../../../../common/components/support/picture-input/types/picture.interface';
import { categoryValidator } from '../../../../../common/components/form/components/category/category.validator';
import { locationValidator } from '../../../../../common/components/form/components/location/location.validator';
import { picturesValidator } from '../../../../../common/components/form/components/pictures/pictures.validator';
var scrollIntoView = require('scroll-into-view');

interface SubmitValidatorProps {
  category: number;
  latitude: number;
  longitude: number;
  pictures: Picture[];
  setErrors: SetErrors;
  setControl: SetControl;
}

export const submitValidator = (props: SubmitValidatorProps) => {
  const { category, latitude, longitude, pictures, setErrors, setControl } =
    props;

  const validations = [
    categoryValidator({ category, setErrors }),
    locationValidator({ lat: latitude, lng: longitude, setErrors }),
    picturesValidator({ pictures, setErrors }),
  ];

  for (let i = 0; i < validations.length; i++) {
    const validation = validations[i];
    if (validation) {
      const element = document.getElementById(validation);
      setControl({ connecting: false });
      scrollIntoView(element);
      return false;
    }
  }

  return true;
};
