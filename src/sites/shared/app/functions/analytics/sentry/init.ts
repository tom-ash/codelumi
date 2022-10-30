import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

export const initSentry = () => {
  Sentry.init({
    dsn: 'https://551489a860d845e0a69697034b086e32@o876363.ingest.sentry.io/5825789',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}
