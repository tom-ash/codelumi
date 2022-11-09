import '@types/googlemaps'

declare global {
  interface Window {
    googleMap: google.maps.Map
  }
}

declare interface LangObject {
  pl: string
  en: string
}