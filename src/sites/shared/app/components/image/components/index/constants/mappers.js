export const mapStateToProps = store => {
  const {
    image: {
      index: {
        imageKeys,
        imageKey
      }
    }
  } = store

  return {
    imageKeys,
    imageKey
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeState: value => dispatch({ type: 'image/index', value })
  }
}
