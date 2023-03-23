import { Dispatch } from 'redux'
import loadScript from '../../scripts/load'

interface LoadGoogleAnalytics {
  (args: {
    measurementId: string
    dispatch: Dispatch
  }): void
}

export const loadGoogleAnalytics: LoadGoogleAnalytics = (args) => {
  const {
    measurementId,
    dispatch,
  } = args

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`).then(() => {
    window.dataLayer = window.dataLayer || []

    function gtag() {
      // @ts-ignore
      dataLayer.push(arguments)
    }

    // @ts-ignore
    gtag('js', new Date())

    // @ts-ignore
    const debug_mode = APP_ENV === 'development'
    // @ts-ignore
    gtag('config', measurementId, { debug_mode })

    dispatch({ type: 'app', value: { googleAnalyticsLoaded: true } })
  })
}
