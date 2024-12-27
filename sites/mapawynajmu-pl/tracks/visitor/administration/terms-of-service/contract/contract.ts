import { TextsRecord } from '../../../../../../common/types/texts-record';
import { Lang } from '../../../../common/types/lang';

export interface AdministrationTermsOfServiceContract {
  app: App;
  texts: Texts;
}

export interface App {
  lang: Lang;
}

type Texts = TextsRecord<'headingOne'>;
