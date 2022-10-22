import '@types/googlemaps'

declare global {
  interface Window {
    googleMap: google.maps.Map
  }
}
