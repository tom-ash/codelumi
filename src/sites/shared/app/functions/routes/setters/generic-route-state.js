function genericRouteStateSetter(state) {
  const { changeApp, dispatch } = this.props

  if (state) {
    dispatch({ type: 'render', value: {} })

    setTimeout(() => {
      Object.keys(state).map(stateKey => {
        if (stateKey !== 'render') {
          if (stateKey === 'control') {
            dispatch({ type: 'control/reset', value: state[stateKey] })
          } else {
            dispatch({ type: stateKey, value: state[stateKey] })
          }
        }
      })
  
      dispatch({ type: 'render', value: state['render'] })
      changeApp({ routeSynced: true })
    }, 0)
  }
}

export default genericRouteStateSetter
