import {
  GoogleMapOptions,
  GoogleMapStyles,
} from '../../../../../../common/types/google';

interface ReplaceMapProps {
  mapOptions: GoogleMapOptions;
  isMobile: boolean;
  mapStyles: GoogleMapStyles;
}

export const replaceMap = (props: ReplaceMapProps) => {
  const { mapOptions, isMobile, mapStyles } = props;

  const googleMapContainer = document.getElementById('google-map-container');
  if (!googleMapContainer) return;

  // @ts-ignore
  const map = window.googleMap;

  // @ts-ignore
  googleMapContainer.replaceChild(
    map.getDiv(),
    document.getElementById('google-map'),
  );

  // @ts-ignore
  map.setOptions(
    // @ts-ignore
    mapOptionsProvider({
      mapOptions,
      isMobile,
      mapStyles,
    }),
  );
};
