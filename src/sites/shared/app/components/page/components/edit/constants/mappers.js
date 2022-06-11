export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const { fetching, nav } = store.page.edit.control
  const {
    id,
    name,
    url,
    body,
    style,
    meta,
    canonicalUrl,
    title,
    description,
    keywords,
    picture,
    lang: pageLang,
    lang_ver_urls,
    online,
    headerAutonumbering,
    schemaMode,
    autoSchema,
    manualSchema,
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    linkData,
    langAltsGroup
  } = store.page.edit.inputs
  const { role } = store.user.authorize.data
  const { updated } = store.page.edit.data

  return {
    fetching,
    lang,
    pageLang,
    routeSynced,
    id,
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
    lang_ver_urls,
    isAdmin: role == 'admin',
    online,
    headerAutonumbering,
    updated,
    nav,
    schemaMode,
    autoSchema,
    manualSchema,
    publishedOn,
    modifiedOn,
    category,
    subcategory,
    linkData,
    langAltsGroup
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'page/edit/control', value }),
    changeInputs: value => dispatch({ type: 'page/edit/inputs', value }),
    changeData: value => dispatch({ type: 'page/edit/data', value }),
    resetInputs: value => dispatch({ type: 'page/edit/inputs/reset', value })
  }
}