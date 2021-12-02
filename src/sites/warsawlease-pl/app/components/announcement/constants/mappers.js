export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    'announcement/create': renderCreate,
    'announcement/edit': renderEdit,
    'announcement/index': renderIndex,
    'announcement/show': renderShow
  } = store.render
  
  return {
    lang,
    renderCreate,
    renderEdit,
    renderIndex,
    renderShow
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {}
}
    