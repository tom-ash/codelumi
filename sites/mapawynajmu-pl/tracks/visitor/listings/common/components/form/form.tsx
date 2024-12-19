import { Category } from './components/category/category';
import containerStyles from '../../../../../../../common/styles/container.module.css';
import { Lang } from '../../../../../common/types/lang';
import {
  SetApp,
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../../../../lib/types/setters';
import { SVGs } from '../../../../../../../common/types/asset';
import styles from './form.module.css';
import { Location } from './components/location/location';
import { Scripts } from '../../../../../../../../lib/types/scripts';
import { GoogleMapOptions } from '../../../../../../../common/types/google';
import { GooglePlacesAutocompleteResult } from '../../../../../../../common/types/google-places-autocomplete';
import { ListingsFormPictures as Pictures } from './components/pictures/pictures';
import { Additional } from './components/additional/additional';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../../common/components/semanticize/select/select';
import { SocialImage } from './components/social-image/social-image';
import { Picture } from '../../../../../../../common/components/support/picture-input/types/picture.interface';

interface ListingsCommonFormProps {
  lang: Lang;
  svgs: SVGs;
  // device: string;
  // screenWidth: string;
  categoryHeading: string;
  categoryInstructions: string;
  categoryError: string;
  category: number;
  isCategoryError: boolean;
  setApp: SetApp;
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  scripts: Scripts;
  longitude: number;
  latitude: number;
  isMapInitialized: boolean;
  mapOptions: GoogleMapOptions;
  location: string;
  locationPlaceholder: string;
  locationError: string;
  isLocationError: boolean;
  locationAutocompleteResults: GooglePlacesAutocompleteResult[];
  locationHeading: string;
  locationInstructions: string;
  picturesHeading: string;
  picturesInstructions: string;
  persistedPictures?: any[]; // TODO
  listingId?: number;
  isPicturesError: boolean;
  area: string;
  areaLabel: string;
  areaPlaceholder: string;
  netRentValue: string;
  netRentLabel: string;
  netRentPlaceholder: string;
  grossRentValue: string;
  grossRentLabel: string;
  grossRentPlaceholder: string;
  rentCurrencyOptions: SelectOption[];
  rentCurrencyValue: number;
  roomsLabel: string;
  roomsPlaceholder: string;
  roomsOptions: SelectOption[];
  roomsValue: string;
  floorLabel: string;
  floorPlaceholder: string;
  floorOptions: SelectOption[];
  floorValue: string;
  totalFloorsLabel: string;
  totalFloorsPlaceholder: string;
  totalFloorsOptions: SelectOption[];
  totalFloorsValue: string;
  addPolishDescriptionLabel: string;
  addPolishDescriptionChecked: boolean;
  addEnglishDescriptionLabel: string;
  addEnglishDescriptionChecked: boolean;
  polishDescriptionLabel: string;
  polishDescription: string;
  englishDescriptionLabel: string;
  englishDescription: string;
  children: React.ReactNode;
  pictures: Picture[];
  locality: string;
  sublocality: string;
}

export const ListingsCommonForm = (props: ListingsCommonFormProps) => {
  const {
    lang,
    svgs,
    categoryHeading,
    categoryInstructions,
    categoryError,
    category,
    isCategoryError,
    setInputs,
    setErrors,
    scripts,
    latitude,
    longitude,
    isMapInitialized,
    mapOptions,
    setData,
    location,
    locationPlaceholder,
    locationError,
    isLocationError,
    setApp,
    locationAutocompleteResults,
    locationHeading,
    locationInstructions,
    picturesHeading,
    picturesInstructions,
    persistedPictures,
    listingId,
    isPicturesError,
    area,
    areaLabel,
    areaPlaceholder,
    netRentValue,
    netRentLabel,
    netRentPlaceholder,
    grossRentValue,
    grossRentLabel,
    grossRentPlaceholder,
    rentCurrencyOptions,
    rentCurrencyValue,
    roomsLabel,
    roomsPlaceholder,
    roomsOptions,
    roomsValue,
    floorLabel,
    floorPlaceholder,
    floorOptions,
    floorValue,
    totalFloorsLabel,
    totalFloorsPlaceholder,
    totalFloorsOptions,
    totalFloorsValue,
    addPolishDescriptionLabel,
    addPolishDescriptionChecked,
    addEnglishDescriptionLabel,
    addEnglishDescriptionChecked,
    polishDescriptionLabel,
    polishDescription,
    englishDescriptionLabel,
    englishDescription,
    children,
    pictures,
    locality,
    sublocality,
  } = props;

  return (
    <form className={`${containerStyles.container} ${styles.container}`}>
      <Category
        lang={lang}
        svgs={svgs}
        heading={categoryHeading}
        instructions={categoryInstructions}
        category={category}
        error={categoryError}
        isError={isCategoryError}
        setInputs={setInputs}
        setErrors={setErrors}
      />
      <Location
        category={category}
        latitude={latitude}
        longitude={longitude}
        svgs={svgs}
        isMapInitialized={isMapInitialized}
        mapOptions={mapOptions}
        mapStyles={[]} // TODO
        setData={setData}
        setInputs={setInputs}
        setErrors={setErrors}
        location={location}
        error={locationError}
        isError={isLocationError}
        placeholder={locationPlaceholder}
        scripts={scripts}
        setApp={setApp}
        autocompleteItems={locationAutocompleteResults}
        locationHeading={locationHeading}
        locationInstructions={locationInstructions}
      />
      <Pictures
        heading={picturesHeading}
        instructions={picturesInstructions}
        persistedPictures={persistedPictures}
        listingId={listingId}
        setInputs={setInputs}
        setErrors={setErrors}
        isError={isPicturesError}
        svgs={svgs}
      />
      <Additional
        // heading={additionalHeading}
        category={category}
        area={area}
        areaLabel={areaLabel}
        areaPlaceholder={areaPlaceholder}
        netRentValue={netRentValue}
        netRentLabel={netRentLabel}
        netRentPlaceholder={netRentPlaceholder}
        grossRentValue={grossRentValue}
        grossRentLabel={grossRentLabel}
        grossRentPlaceholder={grossRentPlaceholder}
        rentCurrencyOptions={rentCurrencyOptions}
        rentCurrencyValue={rentCurrencyValue}
        roomsLabel={roomsLabel}
        roomsPlaceholder={roomsPlaceholder}
        roomsOptions={roomsOptions}
        roomsValue={roomsValue}
        floorLabel={floorLabel}
        floorPlaceholder={floorPlaceholder}
        floorOptions={floorOptions}
        floorValue={floorValue}
        totalFloorsLabel={totalFloorsLabel}
        totalFloorsPlaceholder={totalFloorsPlaceholder}
        totalFloorsOptions={totalFloorsOptions}
        totalFloorsValue={totalFloorsValue}
        addPolishDescriptionLabel={addPolishDescriptionLabel}
        addPolishDescriptionChecked={addPolishDescriptionChecked}
        addEnglishDescriptionLabel={addEnglishDescriptionLabel}
        addEnglishDescriptionChecked={addEnglishDescriptionChecked}
        setInputs={setInputs}
        polishDescriptionLabel={polishDescriptionLabel}
        polishDescription={polishDescription}
        englishDescriptionLabel={englishDescriptionLabel}
        englishDescription={englishDescription}
      />
      {children}
      <SocialImage
        lang={lang}
        pictures={pictures}
        category={category}
        area={area}
        locality={locality}
        sublocality={sublocality}
        netRent={netRentValue}
        grossRent={grossRentValue}
        rentCurrency={rentCurrencyValue}
      />
    </form>
  );
};
