export const mapStateToProps = store => {
  const {
    app,
    data,
  } = store
  const { lang } = app

  const { pageKeys, pageKey } = data

  return {
    lang,
    pageKeys,
    pageKey,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setData: value => dispatch({ type: 'data', value }),
  }
}
