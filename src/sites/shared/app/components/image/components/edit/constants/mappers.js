export const mapStateToProps = store => {

  const {
    image: {
      edit: {
        data: {
          id: imageId,
          body
        }
      }
    }
  } = store

  return {
    imageId,
    body
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeData: value => dispatch({ type: 'image/edit/data', value }),
    // TODO
  }
}