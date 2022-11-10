import 'googlemaps'

declare global {
  interface Window {
    googleMap: google.maps.Map
  }
}

declare interface LangObject {
  pl: string
  en: string
}

export interface ValidateVerificationCode {
  (props: {
    value: string
    changeError(props: LangObject): void
  }): void
}
