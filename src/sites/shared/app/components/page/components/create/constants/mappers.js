export const mapStateToProps = store => {
  const {
    lang,
    urlDataSynced
  } = store.app

  const {
    name,
    url,
    body,
    style,
    title,
    description,
    keywords,
    canonicalUrl,
    picture,
    meta,
    lang_ver_urls
  } = store.page.create.inputs

  return {
    lang,
    urlDataSynced,
    name,
    url,
    body,
    style,
    title,
    description,
    keywords,
    canonicalUrl,
    picture,
    meta,
    lang_ver_urls
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/create/inputs', value }),
    resetInputs: value => dispatch({ type: 'page/create/inputs/reset', value })
  }
}