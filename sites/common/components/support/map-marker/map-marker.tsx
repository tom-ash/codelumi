import { useEffect } from 'react';
import {
  SetApp,
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../lib/types/setters';
import { Lang } from '../../../../mapawynajmu-pl/tracks/common/types/lang';
import { GooglePlacesAutocompleteCountry } from '../address-input/address-input';
import { drawPin } from './functions/draw-pin';
import removePins from '../../../../mapawynajmu-pl/tracks/listings/common/helpers/map/pins/remove-pins';
import { useMouseMarking } from './hooks/use-mouse-marking';
import { GooglePlacesAutocomplete } from '../google-places-autocomplete/google-places-autocomplete';
import { addPin } from './functions/add-pin';
import { GoogleMap } from '../google-map/google-map';
import { GooglePlacesAutocompleteResult } from '../../../types/google-places-autocomplete';
import { GoogleMapOptions, GoogleMapStyles } from '../../../types/google';
import { Scripts } from '../../../../../lib/types/scripts';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';

interface MapMarkerProps {
  isMapInitialized: boolean;
  mapOptions: GoogleMapOptions;
  item: {
    longitude: number;
    latitude: number;
    [key: string]: any;
  };
  pinBuilder: PinBuilder;
  mapStyles: GoogleMapStyles;
  lang: Lang;
  country?: GooglePlacesAutocompleteCountry;
  setApp: SetApp;
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  error: string;
  isError: boolean;
  items: GooglePlacesAutocompleteResult[];
  location: string;
  placeholder: string;
  scripts: Scripts;
  addressInputStyles: Styles;
  googleMapStyles: Styles;
  pinClassName: string;
}

export interface PinBuilder {
  (params: any): string;
}

export const MapMarker = (props: MapMarkerProps) => {
  const {
    isMapInitialized,
    isError,
    mapOptions,
    item,
    pinBuilder,
    mapStyles,
    country,
    lang,
    setData,
    setInputs,
    setErrors,
    items,
    location,
    placeholder,
    setApp,
    scripts,
    addressInputStyles,
    googleMapStyles,
    pinClassName,
  } = props;

  useEffect(() => {
    if (!isMapInitialized) {
      return;
    }

    if (item) {
      drawPin({ item, pinBuilder, className: pinClassName });
    }
  }, [isMapInitialized, item]);

  useMouseMarking({
    isMapInitialized,
    setInputs,
    setErrors,
    setData,
  });

  return (
    <div id="map-marker" className="section">
      <GooglePlacesAutocomplete
        onItemClick={(item) =>
          addPin({
            geocodeBasis: { placeId: item.place_id },
            description: item.description,
            setInputs,
            setErrors,
            setData,
          })
        }
        onInputEnter={(item) =>
          addPin({
            geocodeBasis: { placeId: item.place_id },
            description: item.description,
            setInputs,
            setErrors,
            setData,
          })
        }
        isError={isError}
        country={country}
        items={items}
        setData={setData}
        setInputs={setInputs}
        setErrors={setErrors}
        location={location}
        placeholder={placeholder}
        addressInputStyles={addressInputStyles}
      />
      <GoogleMap
        lang={lang}
        mapStyles={mapStyles}
        mapOptions={mapOptions}
        setApp={setApp}
        scripts={scripts}
        styles={googleMapStyles}
      />
    </div>
  );
};
