import initialAppState from '../../constants/initial-app-state'

// @ts-ignore
export const rootReducer = (state = {
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
  // @ts-ignore
}, action) => {
  const stateKeys = ['app', 'user', 'meta', 'links', 'assets', 'texts', 'errors', 'inputs', 'data', 'control', 'render', 'visitor']

  let actionType = action.type
  const actionValue = action.value

  if (actionType.indexOf('/reset') !== -1) {
    actionType = actionType.replace('/reset', '')

    const newTypeValue = action.value
    const newState = { ...state, [actionType]: newTypeValue}

    return newState
  } else if (stateKeys.indexOf(actionType) !== -1) {
    // @ts-ignore
    const newTypeValue = { ...state[actionType], ...actionValue }
    const newState = { ...state, [actionType]: newTypeValue}

    return newState
  } else {
    return state
  }
}
