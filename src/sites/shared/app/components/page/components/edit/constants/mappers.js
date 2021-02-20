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
  } = store.page.edit.inputs

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
    changeInputs: value => dispatch({ type: 'page/edit/inputs', value }),
    resetInputs: value => dispatch({ type: 'page/edit/inputs/reset', value })
  }
}