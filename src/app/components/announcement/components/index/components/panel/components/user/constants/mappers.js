export const mapStateToProps = (store) => {
  const { language, isMobile, device, path } = store.app
  const inputs = store.announcement.index.inputs

  const {
    switches,
    sort
  } = inputs

  return {
    language,
    isMobile,
    device,
    switches,
    sort
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value })
  }
}
