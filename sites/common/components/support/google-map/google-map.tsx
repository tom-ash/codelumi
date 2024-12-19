import { useGoogleMaps } from '../../../helpers/use-google-maps';
import { GoogleMapOptions, GoogleMapStyles } from '../../../types/google';
import { SetApp } from '../../../../../lib/types/setters';
import { Scripts } from '../../../../../lib/types/scripts';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';

export const GOOGLE_MAP_CONTAINER_ID = 'google-map-container'
export const GOOGLE_MAP_ID = "google-map"

interface GoogleMapProps {
  lang: string;
  mapStyles: GoogleMapStyles;
  setApp: SetApp;
  scripts: Scripts;
  mapOptions: GoogleMapOptions;
  styles: Styles;
}

const apiKey = 'AIzaSyAUEJ1HRdOeh_QKQTUU-sCAgnerzNJY-8k';

export const GoogleMap = (props: GoogleMapProps) => {
  const { lang, mapStyles, setApp, scripts, mapOptions, styles } = props;

  useGoogleMaps({
    googleMapsApiKey: apiKey,
    lang,
    mapStyles,
    scripts,
    isMobile: false,
    setApp,
    mapOptions,
  });

  return (
    <div id={GOOGLE_MAP_CONTAINER_ID} className={styles.googleMapContainer}>
      <div id={GOOGLE_MAP_ID} className={styles.googleMap} />
    </div>
  );
};
