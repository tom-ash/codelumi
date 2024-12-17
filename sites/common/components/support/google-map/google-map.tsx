import { useGoogleMaps } from '../../../helpers/use-google-maps';
import { Lang } from '../../../../mapawynajmu-pl/tracks/common/types/lang';
import { GoogleMapOptions, GoogleMapStyles } from '../../../types/google';
import { SetApp } from '../../../../../lib/types/setters';
import { Scripts } from '../../../../../lib/types/scripts';
// import styles from './google-map.module.css'
import { Styles } from '../../../../mapawynajmu-pl/types/styles';

interface GoogleMapProps {
  lang: Lang;
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
    <div id="google-map-container" className={styles.container}>
      <div id="google-map" className={styles.map} />
    </div>
  );
};
