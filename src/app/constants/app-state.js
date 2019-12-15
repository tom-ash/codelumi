import { routes } from './routes'

export const appState = {
  screenSize: null,
  scrollY: null,
  path: '/',
  language: 'pl',
  connecting: false,
  scripts: {},
  isMobile: null,
  ...routes
}