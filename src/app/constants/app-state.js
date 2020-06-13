import { emptyRoutes } from '../../shared/routes/routes'

export const appState = {
  device: null,
  scrollY: 0,
  path: '/',
  language: 'pl',
  connecting: false,
  scripts: {
    googleMaps: false,
    googleAnalytics: false,
    googleAnalyticsLoading: false
  },
  isMobile: null,
  showNotFound: false,
  ...emptyRoutes
}