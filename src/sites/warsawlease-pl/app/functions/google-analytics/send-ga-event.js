function sendGaEvent(
  event,
  eventLabel
) {
  if (!window || !window.ga || !event) return

  try {
    window.ga('send', {
      hitType: 'event',
      ...event,
      ...eventLabel && eventLabel
    })
  } catch {}
}

export default sendGaEvent
