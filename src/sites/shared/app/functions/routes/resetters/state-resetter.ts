import { Dispatch } from 'redux'

interface StateResetter {
  (args: {
    state: any // TODO
    dispatch: Dispatch
  }): void
}

export const stateResetter: StateResetter = ({ state, dispatch }) => {
  dispatch({ type: 'render/reset', value: {} })

  setTimeout(() => {
    dispatch({ type: 'app', value: state.app })
    dispatch({ type: 'user', value: state.user })
    dispatch({ type: 'meta', value: state.meta })
    dispatch({ type: 'links/reset', value: state.links })
    dispatch({ type: 'assets/reset', value: state.assets })
    dispatch({ type: 'texts/reset', value: state.texts })
    dispatch({ type: 'errors/reset', value: state.errors })
    dispatch({ type: 'inputs/reset', value: state.inputs })
    dispatch({ type: 'data/reset', value: state.data })
    dispatch({ type: 'control/reset', value: state.control })
    dispatch({ type: 'render', value: state['render'] })
  }, 0)
}
