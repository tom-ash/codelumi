export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    polish: store.announcement.create.inputs.descriptionPolish,
    english: store.announcement.create.inputs.descriptionEnglish,
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
  }
}
    