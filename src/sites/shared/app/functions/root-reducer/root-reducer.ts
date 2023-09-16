import initialAppState from '../../constants/initial-app-state'

export const rootReducer = (
  state = {
    app: initialAppState,
    user: {},
    meta: {},
    links: {},
    assets: {},
    texts: {},
    errors: {},
    inputs: {},
    data: {},
    control: {},
    render: {},
    visitor: {},
  },
  // @ts-ignore
  action
) => {
  const stateKeys = [
    'app',
    'user',
    'meta',
    'links',
    'assets',
    'texts',
    'errors',
    'inputs',
    'data',
    'control',
    'render',
    'visitor',
  ]

  let actionType = action.type
  const actionValue = action.value

  if (actionType === 'state') {
    const newState = {}

    stateKeys.map(stateKey => {
      // @ts-ignore
      newState[stateKey] = { ...state[stateKey], ...actionValue[stateKey] }
    })

    return newState
  }

  if (actionType === 'state/reset') {
    const nonresettableStateKeys = ['app', 'user', 'visitor']
    const newState = {}

    stateKeys.map(stateKey => {
      if (nonresettableStateKeys.indexOf(stateKey) !== -1) {
        // @ts-ignore
        newState[stateKey] = { ...state[stateKey], ...actionValue[stateKey] }
      } else {
        // @ts-ignore
        newState[stateKey] = actionValue[stateKey]
      }
    })

    return newState
  }

  if (actionType.indexOf('/reset') !== -1) {
    actionType = actionType.replace('/reset', '')

    const newTypeValue = action.value
    const newState = { ...state, [actionType]: newTypeValue }

    return newState
  }

  if (stateKeys.indexOf(actionType) !== -1) {
    // @ts-ignore
    const newTypeValue = { ...state[actionType], ...actionValue }
    const newState = { ...state, [actionType]: newTypeValue }

    return newState
  }

  return state
}
