import { Dispatch } from 'redux'

interface StateResetter {
  (args: {
    state: any // TODO
    dispatch: Dispatch
  }): void
}

export const stateSetter: StateResetter = ({ state, dispatch }) => {
  setTimeout(() => {
    dispatch({ type: 'app', value: state.app })
    dispatch({ type: 'user', value: state.user })
    dispatch({ type: 'meta', value: state.meta })
    dispatch({ type: 'links', value: state.links })
    dispatch({ type: 'assets', value: state.assets })
    dispatch({ type: 'texts', value: state.texts })
    dispatch({ type: 'errors', value: state.errors })
    dispatch({ type: 'inputs', value: state.inputs })
    dispatch({ type: 'data', value: state.data })
    dispatch({ type: 'control', value: state.control })
    dispatch({ type: 'render', value: state['render'] })
  }, 0)
}
