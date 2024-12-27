import { TextsRecord } from "../../../../../../common/types/texts-record";

export interface AdministrationContactContract {
  texts: Texts;
}

type Texts = TextsRecord<
  | 'headingOne'
  | 'companyName'
  | 'companyStreetAndStreetNumber'
  | 'companyPostalCodeAndCity'
  | 'companyEmail'
>;
