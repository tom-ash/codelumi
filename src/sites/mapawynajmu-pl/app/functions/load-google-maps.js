import { loadScript } from './load-script'

const apiKey = 'AIzaSyAUEJ1HRdOeh_QKQTUU-sCAgnerzNJY-8k'

export function initializeGoogleMaps() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}`)
  .then(() => {
    const { scripts, changeApp } = this.props

    const newScripts = { ...scripts, googleMaps: true }
    changeApp({ scripts: newScripts })
  })
}
