export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    features: store.announcement.show.data.features,
    furnishings: store.announcement.show.data.furnishings,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    