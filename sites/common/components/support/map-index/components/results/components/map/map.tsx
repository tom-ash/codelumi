import { useEffect } from 'react';
import { GoogleMap } from '../../../../../google-map/google-map';
import { Item } from '../../../../types/item.interface';
import { PinBuilder } from '../../../../types/pin-builder.interface';
import { MapStyles } from '../../../../map-index';
import { drawPins } from './helpers/draw-pins';
import { SVGs } from '../../../../../../../types/asset';
import {
  SetApp,
  SetControl,
} from '../../../../../../../../../lib/types/setters';
import { GoogleMapOptions } from '../../../../../../../types/google';
import { Scripts } from '../../../../../../../../../lib/types/scripts';
import { Styles } from '../../../../../../../../mapawynajmu-pl/types/styles';

interface MapProps {
  isMapInitialized: boolean;
  isPinsDrawn: boolean;
  currentListingId: number;
  svgs: SVGs;
  items: Item[];
  pinBuilder: PinBuilder;
  lang: string;
  mapStyles: MapStyles;
  setControl: SetControl;
  mapOptions: GoogleMapOptions;
  setApp: SetApp;
  scripts: Scripts;
  styles: Styles;
}

export const Map = (props: MapProps) => {
  const {
    styles,
    setApp,
    scripts,
    svgs,
    isMapInitialized,
    isPinsDrawn,
    currentListingId,
    items,
    pinBuilder,
    lang,
    mapStyles,
    setControl,
    mapOptions,
  } = props;

  useEffect(() => {
    if (isMapInitialized && !isPinsDrawn) {
      drawPins({
        items,
        currentListingId,
        svgs,
        pinBuilder,
        pinClassName: styles.pin,
      });

      setTimeout(() => {
        setControl({ isPinsDrawn: true });
      }, 0);
    }
  }, [isMapInitialized, isPinsDrawn]);

  useEffect(() => {
    if (isMapInitialized && mapOptions) {
      // @ts-ignore // TODO
      const map = window.googleMap;
      map.setOptions(mapOptions);
    }
  }, [isMapInitialized, mapOptions]);

  return (
    <GoogleMap
      lang={lang}
      mapStyles={mapStyles}
      mapOptions={mapOptions}
      setApp={setApp}
      scripts={scripts}
      styles={styles}
    />
  );
};
