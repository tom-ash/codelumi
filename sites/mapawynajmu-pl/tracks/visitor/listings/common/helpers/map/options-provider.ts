// import {
//   GoogleMapOptions,
//   GoogleMapStyles,
// } from '../../../../../../common/types/google';

import {
  GoogleMapOptions,
  GoogleMapStyles,
} from '../../../../../../../common/types/google';

type MapOptionsProviderParams = {
  mapOptions: GoogleMapOptions;
  mapStyles: GoogleMapStyles;
  isMobile: boolean;
};

const DEFAULT_OPTIONS = {
  fullscreenControl: false,
  clickableIcons: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
};

export const mapOptionsProvider = (params: MapOptionsProviderParams) => {
  const { mapOptions, isMobile, mapStyles } = params;

  return {
    ...DEFAULT_OPTIONS,
    ...(!isMobile && { gestureHandling: 'greedy' }),
    ...mapOptions,
    styles: mapStyles,
  };
};
