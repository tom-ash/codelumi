export function buildEvents({ actions, eventCategory }) {
  const events = {}

  Object.keys(actions).map(actionKey => {
    const eventAction = actions[actionKey]

    events[`${actionKey.slice(0, -7)}_EVENT`] = {
      eventCategory,
      eventAction,
    }
  })

  return events
}
