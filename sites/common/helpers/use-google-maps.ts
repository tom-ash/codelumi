import { useEffect } from 'react';
import { SetApp } from '../../../lib/types/setters';
import { Lang } from '../../mapawynajmu-pl/tracks/common/types/lang';
import { loadScript } from './scripts/load-script';
import { initializeMap } from '../../mapawynajmu-pl/tracks/listings/common/helpers/map/initialize';
import removePins from '../../mapawynajmu-pl/tracks/listings/common/helpers/map/pins/remove-pins';
import { GoogleMapOptions, GoogleMapStyles } from '../types/google';
import { Scripts } from '../../../lib/types/scripts';

interface UseGoogleMapsParams {
  googleMapsApiKey: string;
  lang: Lang;
  mapStyles: GoogleMapStyles;
  setApp: SetApp;
  scripts: Scripts;
  isMobile: boolean;
  mapOptions: GoogleMapOptions;
}

export const useGoogleMaps = (params: UseGoogleMapsParams) => {
  const {
    googleMapsApiKey,
    lang,
    mapStyles,
    scripts,
    isMobile,
    mapOptions,
    setApp,
  } = params;
  const { googleMaps } = scripts;

  const langQuery = lang ? `&language=${lang}` : '';

  useEffect(() => {
    if (!googleMaps) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places${langQuery}`,
      ).then(() => {
        const newScripts = { ...scripts, googleMaps: true };

        setApp({ scripts: newScripts });
      });
    }

    if (googleMaps) {
      initializeMap({
        mapOptions,
        isMobile,
        mapStyles,
      });

      setApp({ isMapInitialized: true });
    }

    return () => {
      // @ts-ignore
      const pins = window.pins;

      if (pins) {
        removePins(pins);
      }
    };
  }, [googleMaps]);
};
