// import { SetApp, SetControl, SetData, SetErrors, SetInputs } from "../../../../../../../lib/types/setters";
import { LinkData } from '../../../../../../../lib/types/link-data';
import { Scripts } from '../../../../../../../lib/types/scripts';
import { SetApp, SetControl } from '../../../../../../../lib/types/setters';
import { Picture } from '../../../../../../common/components/support/picture-input/types/picture.interface';
import { Assets } from '../../../../../../common/types/asset';
import { GoogleMapOptions } from '../../../../../../common/types/google';
import { Lang } from '../../../../common/types/lang';

export interface VisitorListingsIndexContract {
  app: ListingsNewApp;
  assets: Assets;
  control: ListingsNewControl;
  data: ListingsNewData;
    links: ListingsNewLinks;
  inputs: ListingsNewInputs;
  errors: ListingsNewErrors;
  texts: ListingsNewTexts;
  setApp: SetApp;
  // setData: SetData;
  // setInputs: SetInputs;
  // setErrors: SetErrors;
  setControl: SetControl;
}

export interface ListingsNewApp {
  lang: Lang;
  isMapInitialized: boolean;
  isPinsDrawn: boolean;
  scripts: Scripts;
  device: string;
  isMobile: boolean;
}

export interface ListingsNewControl {
  mapOptions: GoogleMapOptions;
}

export interface ListingsNewLinks {
  root: LinkData;
}

export interface ListingsNewData {
  currentListingId: number;
  announcements: any[];
  tile: null | {
    category: number;
    locality: string;
    sublocality?: string;
    id: number;
    pictures: Picture[];
    title: string;
    area: number;
    grossRentAmount: number;
    // grossRentAmountPerSqm
    // netRentAmount
    // netRentAmountPerSqm
    rentCurrency: number;

    // availabilityDate
    // englishDescription
    // features
    // floor
    // furnishings
    // isPromoted
    // link
    // name
    // phone
    // polishDescription

    // rooms
    // totalFloors
  }
}

export interface ListingsNewTexts {
  // congratulations: string;
  // socialImageExplanation: string;
}

export interface ListingsNewInputs {}

export interface ListingsNewErrors {}
