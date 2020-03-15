export const mapStateToProps = (store) => {
  const {
    addPolishDescription,
    addEnglishDescription
  } = store.announcement.create.inputs
  
  return {
    language: store.app.language,
    pl: store.announcement.create.inputs.descriptionPolish,
    en: store.announcement.create.inputs.descriptionEnglish,
    addPolishDescription,
    addEnglishDescription
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: (value) => dispatch({ type: 'announcement/create/inputs', value: value }),
  }
}
    