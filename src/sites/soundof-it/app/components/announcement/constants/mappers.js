export const mapStateToProps = store => {
  const render = store.render
  const {
    'announcement/create': renderCreate
  } = render
  
  return {
    renderCreate
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    // changeState: value => dispatch({ type: 'announcement/create', value }),
  }
}