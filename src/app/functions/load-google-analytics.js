import { loadScript } from './load-script'

export function loadGoogleAnalytics() {
  if (typeof window === 'undefined') return
  
  const { changeApp, scripts } = this.props

  changeApp({ scripts: { ...scripts, googleAnalyticsLoading: true } })
  loadScript(`https://www.googletagmanager.com/gtag/js?id=UA-165973681-1`)
  .then(() => {
    const { scripts } = this.props

    window.dataLayer = window.dataLayer || []
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', 'UA-165973681-1')

    if (window.dataLayer.length === 0) return

    window.ga('create', 'UA-165973681-1', 'auto')

    changeApp({ scripts: { ...scripts, googleAnalyticsLoading: false, googleAnalytics: true } })
  })
}