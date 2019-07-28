export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    description: store.announcement.show.description
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    