import { GoogleMapOptions, GoogleMapStyles } from '../../../../../../../common/types/google';
import { mapOptionsProvider } from './options-provider';
import { setUpPinCreator } from './pins/set-up-creator';
import { replaceMap } from './replace';

interface InitializeMapProps {
  mapOptions: GoogleMapOptions;
  isMobile: boolean;
  mapStyles: GoogleMapStyles;
}

export const initializeMap = (props: InitializeMapProps) => {
  const { mapOptions, isMobile, mapStyles } = props;

  // @ts-ignore
  if (window.googleMap) {
    replaceMap({
      mapOptions,
      isMobile,
      mapStyles,
    });
  } else {
    // TODO: Fix "Loading the Google Maps JavaScript API without a callback is not supported: https://developers.google.com/maps/documentation/javascript/url-params#required_parameters."

    // @ts-ignore
    window.googleMap = new google.maps.Map(
      // @ts-ignore
      document.getElementById('google-map'),
      mapOptionsProvider({
        mapOptions,
        mapStyles,
        isMobile,
      }),
    );

    setUpPinCreator();

    // @ts-ignore
    window.sessionToken = new google.maps.places.AutocompleteSessionToken();
  }
};
