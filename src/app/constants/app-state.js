import { routes } from './routes'

export const appState = {
  screenSize: null,
  scrollY: null,
  path: '/',
  language: 'polish',
  connecting: false,
  scripts: {},
  isMobile: null,
  ...routes
}