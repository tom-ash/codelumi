import { loadScript } from './load-script'

const apiKey = 'AIzaSyBTV8VlJwqOP4aGz0SvDWJyEFloZh9YjgA'

export function loadGoogleMaps() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)
  .then(() => {
    const { scripts, changeApp } = this.props

    const newScripts = { ...scripts, googleMaps: true }
    changeApp({ scripts: newScripts })
  })
}