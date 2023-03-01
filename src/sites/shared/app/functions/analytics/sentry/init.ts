import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

function getSentryUrl() {
  // @ts-ignore
  switch (APP_ENV) {
    case 'development':
      return 'https://551489a860d845e0a69697034b086e32@o876363.ingest.sentry.io/5825789'
    case 'production':
      return 'https://51fba1beceb849d38989fd5eecb5f735@o876363.ingest.sentry.io/4504761702940672'
    default:
      return ''
  }
}

export const initSentry = () => {
  Sentry.init({
    dsn: getSentryUrl(),
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}
