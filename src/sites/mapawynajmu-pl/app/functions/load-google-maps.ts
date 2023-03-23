import { Dispatch } from 'redux'
import { loadScript } from './load-script'

const apiKey = 'AIzaSyAUEJ1HRdOeh_QKQTUU-sCAgnerzNJY-8k'

interface loadGoogleMaps {
  (args: {
    scripts: any // TODO: TS!
    dispatch: Dispatch
  }): void
}

export const loadGoogleMaps: loadGoogleMaps = (args) => {
  const { scripts, dispatch } = args

  const setApp = (value: any) => dispatch({ type: 'app', value })

  loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=pl`).then(() => {
    const newScripts = { ...scripts, googleMaps: true }
    setApp({ scripts: newScripts })
  })
}
