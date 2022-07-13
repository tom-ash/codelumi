export enum Langs {
  pl = 'pl',
  en = 'en'
}

type LangObject = {
  pl: string,
  en: string
}

type LangHandler = (
  this: React.ClassicComponent<{ lang: Langs }>,
  langObject: LangObject
) => string

export default LangHandler
