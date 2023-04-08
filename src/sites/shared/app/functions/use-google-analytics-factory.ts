import { useContext, useEffect } from 'react'
import { ReactReduxContext } from 'react-redux'
import { loadGoogleAnalytics } from './analytics/google/load'

export const useGoogleAnalyticsFactory = (measurementId: string) => {
  return () => {
    const { store } = useContext(ReactReduxContext)
    const { getState, dispatch } = store
    const { visitor } = getState()
    const { statisticsConsent } = visitor

    useEffect(() => {
      if (statisticsConsent)
        loadGoogleAnalytics({
          measurementId,
          dispatch,
        })
    }, [statisticsConsent])
  }
}
