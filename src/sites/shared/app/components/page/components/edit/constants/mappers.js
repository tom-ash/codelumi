export const mapStateToProps = store => {
  const {
    app,
    user,
    control,
    data,
    inputs,
  } = store
  const {
    lang,
    routeSynced,
  } = app
  const { role } = user
  const { fetching, nav } = control
  const { updated } = data
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
    coverImage,
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
    langAltsGroup,
  } = inputs

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
    coverImage,
    meta,
    lang_ver_urls,
    isAdmin: role === 'admin',
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
    langAltsGroup,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setControl: value => dispatch({ type: 'control', value }),
    setData: value => dispatch({ type: 'data', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
  }
}
