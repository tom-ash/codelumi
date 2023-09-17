export const mapStateToProps = store => {
  const { app, render } = store
  const { lang } = app
  const {
    'announcement/create': renderCreate,
    'announcement/edit': renderEdit,
    'announcement/index': renderIndex,
    listingPromotion,
  } = render

  return {
    lang,
    renderCreate,
    renderEdit,
    renderIndex,
    listingPromotion,
  }
}
