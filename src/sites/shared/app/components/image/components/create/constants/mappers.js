export const mapStateToProps = store => {
  const {
    image: {
      create: {
        // TODO
      }
    }
  } = store

  return {
    // TODO
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeState: value => dispatch({ type: 'image/create', value }),
    // TODO
  }
}