import { GOOGLE_MAP_CONTAINER_ID, GOOGLE_MAP_ID } from '../../../../../../../common/components/support/google-map/google-map';
import { GoogleMapOptions, GoogleMapStyles } from '../../../../../../../common/types/google';
import { mapOptionsProvider } from './options-provider';

interface ReplaceMapProps {
  mapOptions: GoogleMapOptions;
  isMobile: boolean;
  mapStyles: GoogleMapStyles;
}

export const replaceMap = (props: ReplaceMapProps) => {
  const { mapOptions, isMobile, mapStyles } = props;

  const googleMapContainer = document.getElementById(GOOGLE_MAP_CONTAINER_ID);
  if (!googleMapContainer) return;

  // @ts-ignore
  const map = window.googleMap;

  // @ts-ignore
  googleMapContainer.replaceChild(
    map.getDiv(),
    document.getElementById(GOOGLE_MAP_ID)!,
  );

  // @ts-ignore
  map.setOptions(
    
    mapOptionsProvider({
      mapOptions,
      isMobile,
      mapStyles,
    }),
  );
};
