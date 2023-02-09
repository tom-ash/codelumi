export const mapStateToProps = store => {
  const { app } = store
  const { lang, path } = app

  return {
    lang,
    path,
  }
}

export const mapDispatchToProps = dispatch => {
  return {}
}
