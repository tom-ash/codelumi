export const mapStateToProps = store => {
  const {
    lang
  } = store.app

  const {
    name,
    url,
    body,
    style,
    title,
    description,
    keywords,
    canonical_url,
    picture,
    meta,
    lang_vers
  } = store.page.create.inputs

  return {
    lang,
    name,
    url,
    body,
    style,
    title,
    description,
    keywords,
    canonical_url,
    picture,
    meta,
    lang_vers
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'page/create/inputs/reset', value })
  }
}