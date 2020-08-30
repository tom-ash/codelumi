export function sendAnalyticsEvent({
  eventCategory,
  eventAction
}) {
  if (!window || !window.ga) return

  window.ga('send', {
    hitType: 'event',
    eventCategory,
    eventAction
  })
}
