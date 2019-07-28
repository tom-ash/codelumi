export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    features: store.announcement.show.features,
    furnishings: store.announcement.show.furnishings,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    