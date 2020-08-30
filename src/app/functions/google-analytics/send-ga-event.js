export function sendGaEvent(
  event,
  eventLabel
) {
  if (!window || !window.ga || !event) return

  window.ga('send', {
    hitType: 'event',
    ...event,
    ...eventLabel && eventLabel
  })
}
