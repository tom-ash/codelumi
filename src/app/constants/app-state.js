import { routes } from './routes'

export const appState = {
  device: null,
  scrollY: null,
  path: '/',
  language: 'pl',
  connecting: false,
  scripts: {},
  isMobile: null,
  ...routes
}