export const mapStateToProps = store => {
  const {
    inputs
  } = store
  const {
    category,
    features,
    addFeatures,
  } = inputs
  
  return {
    lang: store.app.lang,
    category,
    features,
    addFeatures,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setInputs: value => dispatch({ type: 'inputs', value }),
  }
}
