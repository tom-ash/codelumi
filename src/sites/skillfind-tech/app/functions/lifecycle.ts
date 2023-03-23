import { loadGoogleAnalytics } from '../../../shared/app/functions/analytics/google/load'
import getGoogleAnalyticsMeasurementId from './analytics/google/getters/measurement-id'
import { matchStateToRoute } from './routes/matchers/state-to-route'
import { screenSizeHandler } from '../../../shared/app/functions/screen/handlers/screen-size'

export function componentDidMount() {
  // @ts-ignore
  const { dispatch } = this.props

  screenSizeHandler({ dispatch })
  window.addEventListener('resize', () => screenSizeHandler({ dispatch }), false)

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
