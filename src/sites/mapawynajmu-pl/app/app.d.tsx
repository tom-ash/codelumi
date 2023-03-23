import 'googlemaps'

declare global {
  interface Window {
    googleMap: google.maps.Map
    areListingsObsolete: boolean
    dataLayer: any[]
  }
}

declare interface LangObject {
  pl: string
  en: string
}

export interface LinkObject {
  href: string
  hrefLang: string
}

export interface ValidateVerificationCode {
  (props: { value: string; changeError(props: LangObject): void }): boolean
}

export type EmptyTextInput = ''
