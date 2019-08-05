import { loadScript } from './load-script'

const apiKey = 'AIzaSyBTV8VlJwqOP4aGz0SvDWJyEFloZh9YjgA'

export function loadGoogleMaps() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)
  .then(() => (
    this.props.changeScripts({
      googleMaps: true
    })
  ))
}