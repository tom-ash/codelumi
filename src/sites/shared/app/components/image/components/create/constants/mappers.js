export const mapStateToProps = store => {
  const {
    image: {
      create: {
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
    changeState: value => dispatch({ type: 'image/create', value })
  }
}
