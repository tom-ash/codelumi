import loadScript from '../../scripts/load'

export function loadGoogleAnalytics(measurementId) {
  if (typeof window === 'undefined') return

  const { setApp, scripts } = this.props

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`).then(() => {
    const { scripts } = this.props

    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    APP_ENV === 'development' ? gtag('config', measurementId, { debug_mode: true }) : gtag('config', measurementId)

    setApp({ scripts: { ...scripts, googleAnalytics: true } })
  })
}
