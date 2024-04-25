import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'

export interface UserObject {
  businessName: string;
  industry: string;
  emailAddress: string
  password: string
  termsOfServiceConsent: boolean
  consents: any[] // TODO
  logo: Picture;
}
