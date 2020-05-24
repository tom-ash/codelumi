export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value: value })
  }
}
    