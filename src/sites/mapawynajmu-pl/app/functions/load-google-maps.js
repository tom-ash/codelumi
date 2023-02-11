import { loadScript } from './load-script'

const apiKey = 'AIzaSyAUEJ1HRdOeh_QKQTUU-sCAgnerzNJY-8k'

export function initializeGoogleMaps() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=pl`).then(() => {
    const { scripts, setApp } = this.props

    const newScripts = { ...scripts, googleMaps: true }
    setApp({ scripts: newScripts })
  })
}
