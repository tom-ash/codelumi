import { Picture } from '../../../../../../../../../../../shared/app/components/support/picture-input/types/picture.interface'

export interface UserObject {
  businessName: string
  industry: string
  email: string
  password: string
  termsOfServiceConsent: boolean
  consents?: any[],
  logo: Picture
  link?: string
}
