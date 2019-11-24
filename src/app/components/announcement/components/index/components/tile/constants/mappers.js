export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    isMobile: store.app.isMobile
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value: value })
  }
}
    