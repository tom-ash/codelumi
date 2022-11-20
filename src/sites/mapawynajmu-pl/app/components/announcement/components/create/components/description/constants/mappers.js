export const mapStateToProps = store => {
  const { showPolish, showEnglish } = store.announcement.create.inputs

  return {
    lang: store.app.lang,
    polish: store.announcement.create.inputs.polishDescription,
    english: store.announcement.create.inputs.englishDescription,
    showPolish,
    showEnglish,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
