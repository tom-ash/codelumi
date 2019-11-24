import { loadScript } from './load-script'

const apiKey = 'AIzaSyBTV8VlJwqOP4aGz0SvDWJyEFloZh9YjgA'

export function loadGoogleMaps() {
  const { scripts, changeApp } = this.props

  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)
  .then(() => {
    const newScripts = { ...scripts, googleMaps: true }
    changeApp({ scripts: newScripts })
  })
}