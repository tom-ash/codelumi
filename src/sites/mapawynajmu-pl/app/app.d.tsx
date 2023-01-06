import 'googlemaps'

declare global {
  interface Window {
    googleMap: google.maps.Map
    areListingsObsolete: boolean
  }
}

declare interface LangObject {
  pl: string
  en: string
}

export interface ValidateVerificationCode {
  (props: { value: string; changeError(props: LangObject): void }): boolean
}
