declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'isomorphic-style-loader/withStyles'
declare module 'isomorphic-style-loader/useStyles'
declare module 'managed-inputs'

type LangHandler = (
  this: React.ClassicComponent<{ lang: 'pl' | 'en' }>,
  langObject: LangObject
) => string

type LangObject = {
  pl: string,
  en: string
}

declare type ChangeRoute = (
  this: React.ClassicComponent,
  props: {
    href: string
    withoutScroll?: boolean
    retainQueryParams?: boolean
  }
) => void
