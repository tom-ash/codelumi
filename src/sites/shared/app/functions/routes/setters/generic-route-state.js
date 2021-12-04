function genericRouteStateSetter(state) {
  const { changeApp, dispatch } = this.props

  if (state) {
    Object.keys(state).map(stateKey => {
      dispatch({ type: stateKey, value: state[stateKey] })
    })
  }

  changeApp({ routeSynced: true })
}

export default genericRouteStateSetter
