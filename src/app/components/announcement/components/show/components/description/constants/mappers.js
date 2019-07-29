export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    descriptionPolish: store.announcement.show.data.descriptionPolish,
    descriptionEnglish: store.announcement.show.data.descriptionEnglish
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    