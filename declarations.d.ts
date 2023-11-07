declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module 'isomorphic-style-loader-react18/withStyles'
declare module 'isomorphic-style-loader-react18/useStyles'
declare module 'managed-inputs'

type LangObject = {
  pl: string
  en: string
}

type ChangeRoute = (
  // TODO: Signify bound this.
  props: {
    href: string
    withScroll?: boolean
    retainQueryParams?: boolean
  }
) => void

type Lang = 'pl' | 'en'

interface ChangeError {
  (props: LangObject): void
}

type setControl = (args: { [key: string]: boolean }) => void
type ChangeInputs = (args: { [key: string]: string | number | boolean }) => void
