import { Picture } from '../../../../../../../../../../../common/components/support/picture-input/types/picture.interface';

export interface UserObject {
  businessName: string;
  link?: string;
  industry: string;
  logo: Picture;
  email: string;
  password: string;
  termsOfServiceConsent: boolean;
  consents?: any[];
}
