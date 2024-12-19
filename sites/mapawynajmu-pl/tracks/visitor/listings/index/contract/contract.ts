// import { SetApp, SetControl, SetData, SetErrors, SetInputs } from "../../../../../../../lib/types/setters";
import { Scripts } from '../../../../../../../lib/types/scripts';
import { SetApp, SetControl } from '../../../../../../../lib/types/setters';
import { Assets } from '../../../../../../common/types/asset';
import { GoogleMapOptions } from '../../../../../../common/types/google';
import { Lang } from '../../../../common/types/lang';

export interface VisitorListingsIndexContract {
  app: ListingsNewApp;
  assets: Assets;
  control: ListingsNewControl;
  data: ListingsNewData;
  //   links: ListingsNewLinks;
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

export interface ListingsNewData {
  // announcement: {
  //   href: string;
  //   image: string;
  //   title: string;
  // };
  currentListingId: number;
  announcements: any[];
}

export interface ListingsNewTexts {
  // congratulations: string;
  // socialImageExplanation: string;
}

export interface ListingsNewInputs {}

export interface ListingsNewErrors {}
