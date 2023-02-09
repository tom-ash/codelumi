export const mapStateToProps = store => {
  const {
    data
  } = store
  const {
    imageKeys,
    imageKey, // TODO: Move to inputs.
  } = data

  return {
    imageKeys,
    imageKey,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setData: value => dispatch({ type: 'data', value }),
  }
}
