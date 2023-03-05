import { AccountType } from "../../../../../../types/user.types"

export interface UserObject {
  accountType: AccountType
  emailAddress: string
  password: string
  countryCode: string
  phoneNumber: string
  termsOfServiceConsent: boolean
  businessName?: string
  consents: any[] // TODO
}