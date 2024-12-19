import { LinkData } from '../../../../../../../../lib/types/link-data';
import { SVGData } from '../../../../../../../common/types/asset';
import { Lang } from '../../../../../common/types/lang';
import { AccountType } from '../../../../common/types/user.types';

export interface UsersNewCredentialsVerificationApp {
  lang: Lang;
}

export interface UsersNewCredentialsVerificationAssets {
  svgs: {
    [key: string]: SVGData;
  };
}

export interface UsersNewCredentialsVerificationData {
  accountType: AccountType;
}

export interface UsersNewCredentialsVerificationTexts {
  accountCreated: string;
  allRightsReserved: string;
  congratulations: string;
  h1: string;
  partnerPage: string;
  showMyAccountMenuButtonLabel: string;
}

export interface UsersNewCredentialsVerificationLinks {
  'listings/new/form': LinkData;
}
