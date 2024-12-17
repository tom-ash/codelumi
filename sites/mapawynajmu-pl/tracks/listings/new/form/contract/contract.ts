import { Scripts } from '../../../../../../../lib/types/scripts';
import {
  SetApp,
  SetControl,
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../../../lib/types/setters';
import {
  SelectOption,
  SelectOptionValue,
} from '../../../../../../common/components/semanticize/select/select';
import { Picture } from '../../../../../../common/components/support/picture-input/types/picture.interface';
import { Assets } from '../../../../../../common/types/asset';
import { GoogleMapOptions } from '../../../../../../common/types/google';
import { GooglePlacesAutocompleteResult } from '../../../../../../common/types/google-places-autocomplete';
import { Lang } from '../../../../common/types/lang';

export interface ListingsNewContract {
  app: ListingsNewApp;
  assets: Assets;
  control: ListingsNewControl;
  data: ListingsNewData;
  //   links: ListingsNewLinks;
  inputs: ListingsNewInputs;
  errors: ListingsNewErrors;
  texts: ListingsNewTexts;
  setApp: SetApp;
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  setControl: SetControl;
}

export interface ListingsNewApp {
  lang: Lang;
  scripts: Scripts;
  isMapInitialized: boolean;
}

export interface ListingsNewData {
  locationAutocompleteResults: GooglePlacesAutocompleteResult[];
  listingId?: number;
  persistedPictures?: any[];
}

export interface ListingsNewControl {
  mapOptions: GoogleMapOptions;
  connecting: boolean;
}

export interface ListingsNewTexts {
  categoryHeading: string;
  categoryInstructions: string;
  categoryError: string;
  locationPlaceholder: string;
  locationError: string;
  locationHeading: string;
  locationInstructions: string;
  picturesHeading: string;
  picturesUploadInstructions: string;
  areaInputLabel: string;
  areaInputPlaceholder: string;
  netRentAmountInputLabel: string;
  grossRentAmountInputLabel: string;
  roomsSelectLabel: string;
  floorSelectLabel: string;
  totalFloorsSelectLabel: string;
  showPolishDescriptionCheckboxLabel: string;
  showEnglishDescriptionCheckboxLabel: string;
}

export interface ListingsNewInputs {
  category: number;
  latitude: number;
  longitude: number;
  location: string;
  area: string;
  netRentAmount: string;
  grossRentAmount: string;
  rentCurrency: number;
  rentCurrencySelectOptions: SelectOption[];
  rooms: string;
  floor: string;
  totalFloors: string;
  showPolishDescription: boolean;
  showEnglishDescription: boolean;
  polishDescription: string;
  englishDescription: string;
  pictures: Picture[];
  locality: string | null;
  sublocality: string | null;
}

export interface ListingsNewErrors {
  category: boolean;
  location: boolean;
  pictures: boolean;
}
