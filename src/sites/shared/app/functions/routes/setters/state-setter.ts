import { Dispatch } from 'redux'

interface StateResetter {
  (args: {
    state: any // TODO
    dispatch: Dispatch
  }): void
}

export const stateSetter: StateResetter = ({ state, dispatch }) => {
  dispatch({ type: 'state', value: state })
}
