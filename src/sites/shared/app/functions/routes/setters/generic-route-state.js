function genericRouteStateSetter(state) {
  const { setApp, dispatch } = this.props

  if (state) {

    console.log(this)

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
      setApp({ routeSynced: true })
    }, 0)
  }
}

export default genericRouteStateSetter
