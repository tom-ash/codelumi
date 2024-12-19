import { LOCATION_ID } from './location';

interface LocationValidatorParams {
  lat: number | null;
  lng: number | null;
  setErrors(params: object): void;
}

export const locationValidator = (
  params: LocationValidatorParams,
): 'location' | null => {
  const { lat, lng, setErrors } = params;

  if (!(lat && lng)) {
    setErrors({ isLocationError: true });

    return LOCATION_ID;
  }

  return null;
};
