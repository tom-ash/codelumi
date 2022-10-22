export const mapStateToProps = store => {
  const { lang } = store.app

  const {
    'announcement/create': renderCreate,
    'announcement/edit': renderEdit,
    'announcement/index': renderIndex,
  } = store.render

  return {
    lang,
    renderCreate,
    renderEdit,
    renderIndex,
  }
}

export const mapDispatchToProps = dispatch => {
  return {}
}
