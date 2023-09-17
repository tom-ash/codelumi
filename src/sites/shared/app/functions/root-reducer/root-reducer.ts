import initialAppState from '../../constants/initial-app-state'

export interface StoreObject {
  [key:string]: any
}

export interface Store {
  app: StoreObject,
  user: StoreObject,
  links: StoreObject,
  assets: StoreObject,
  texts: StoreObject,
  errors: StoreObject,
  inputs: StoreObject,
  data: StoreObject,
  control: StoreObject,
  render: StoreObject,
  visitor: StoreObject,
}

interface RootReducer {
  (state: Store, action: any): Store
}

export const rootReducer: RootReducer = (
  state = {
    app: initialAppState,
    render: {},
    visitor: {},
    user: {},
    links: {},
    assets: {},
    control: {},
    texts: {},
    data: {},
    inputs: {},
    errors: {},
  },
  action
) => {
  const stateKeys = [
    'app',
    'user',
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

    return newState as Store
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

    return newState as Store
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
