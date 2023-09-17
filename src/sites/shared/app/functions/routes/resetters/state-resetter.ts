import { Dispatch } from 'redux'

interface StateResetter {
  (args: {
    state: any // TODO
    dispatch: Dispatch
  }): void
}

export const stateResetter: StateResetter = ({ state, dispatch }) => {
  dispatch({ type: 'state/reset', value: state })
}
