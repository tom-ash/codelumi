import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id'
import { matchStateToRoute } from './routes/matchers/state-to-route'

export function componentDidMount() {
  // @ts-ignore
  const { dispatch } = this.props

  // @ts-ignore
  this.screenSizeHandler()
  // @ts-ignore
  window.addEventListener('resize', this.screenSizeHandler, false)

  if (process.env.NODE_ENV === 'development') {
    matchStateToRoute({
      isSSR: true,
      dispatch,
    })
  }

  window.onpopstate = () => matchStateToRoute({
    isSSR: false,
    dispatch,
  })
}

// @ts-ignore
export function componentDidUpdate(prevProps) {
  const { loadGa: prevLoadGa } = prevProps
  // @ts-ignore
  const { statisticsConsent, loadGa, setApp } = this.props

  if (statisticsConsent && !loadGa) setApp({ loadGa: true })
  if (!prevLoadGa && loadGa) {
    // @ts-ignore
    loadGoogleAnalytics.call(this, getGoogleAnalyticsMeasurementId())
  }
}
