import { useMemo } from 'react';
import { MapMarker } from '../../../../../../../../common/components/support/map-marker/map-marker';
import { pinBuilder } from './functions/pin-builder';
import { SVGs } from '../../../../../../../../common/types/asset';
import { Lang } from '../../../../../../common/types/lang';
import {
  GoogleMapOptions,
  GoogleMapStyles,
} from '../../../../../../../../common/types/google';
import {
  SetApp,
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../../../../../lib/types/setters';
import { GooglePlacesAutocompleteResult } from '../../../../../../../../common/types/google-places-autocomplete';
import { Scripts } from '../../../../../../../../../lib/types/scripts';
import addressInputStyles from './styles/address-input.module.css';
import googleMapStyles from './styles/google-map.module.css';
import { SectionHeading } from '../../../../../../../../common/components/support/headings/section-heading';
import sectionStyles from '../../styles/section.module.css';
import { Instructions } from '../../../../../../../../common/components/support/instructions/instructions';
import instructionsStyles from '../../styles/instructions.module.css';
import pinClassName from './styles/pin.module.css';

export const LOCATION_ID = 'location';

interface LocationProps {
  longitude: number;
  latitude: number;
  category: number;
  svgs: SVGs;
  isMapInitialized: boolean;
  mapOptions: GoogleMapOptions;
  mapStyles: GoogleMapStyles;
  setApp: SetApp;
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  error: string;
  isError: boolean;
  autocompleteItems: GooglePlacesAutocompleteResult[];
  location: string;
  placeholder: string;
  scripts: Scripts;
  locationHeading: string;
  locationInstructions: string;
}

export const Location = (props: LocationProps) => {
  const {
    longitude,
    latitude,
    category,
    svgs,
    isMapInitialized,
    mapOptions,
    mapStyles,
    setData,
    setInputs,
    setErrors,
    error,
    isError,
    autocompleteItems,
    location,
    placeholder,
    scripts,
    setApp,
    locationHeading,
    locationInstructions,
  } = props;

  const item = useMemo(() => {
    return {
      longitude,
      latitude,
      category,
      svgs,
    };
  }, [longitude, latitude, category]);

  return (
    <section id={LOCATION_ID} className={sectionStyles.section}>
      <SectionHeading value={locationHeading} />
      <Instructions
        value={locationInstructions}
        isError={isError}
        styles={instructionsStyles}
      />
      <MapMarker
        item={item}
        pinBuilder={pinBuilder}
        lang={Lang.PL}
        country="pl"
        isMapInitialized={isMapInitialized}
        mapOptions={mapOptions}
        mapStyles={mapStyles}
        setData={setData}
        setInputs={setInputs}
        setErrors={setErrors}
        error={error}
        isError={isError}
        items={autocompleteItems}
        location={location}
        placeholder={placeholder}
        scripts={scripts}
        setApp={setApp}
        addressInputStyles={addressInputStyles}
        googleMapStyles={googleMapStyles}
        pinClassName={pinClassName.pin}
      />
    </section>
  );
};
