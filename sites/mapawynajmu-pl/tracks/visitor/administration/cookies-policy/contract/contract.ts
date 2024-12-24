import { Lang } from "../../../../common/types/lang";

export interface AdministrationCookiesPolicyContract {
  app: App;
  texts: Texts;
}

export interface App {
  lang: Lang;
}

type Texts = Record<
  'headingOne',
  string
>
