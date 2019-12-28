import { routes } from './routes'

export const appState = {
  device: null,
  scrollY: null,
  path: '/',
  language: 'pl',
  connecting: false,
  scripts: {
    googleMaps: false,
    googleAnalytics: false,
    googleAnalyticsLoading: false
  },
  isMobile: null,
  ...routes
}