export function sendAnalyticsEvent({ eventCategory, eventAction, eventLabel }) {
  return;

  if (!window || !window.ga) return;

  window.ga('send', {
    hitType: 'event',
    eventCategory,
    eventAction,
    eventLabel,
  });
}
