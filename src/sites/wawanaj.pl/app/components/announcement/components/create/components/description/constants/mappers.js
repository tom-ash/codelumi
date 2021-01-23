export const mapStateToProps = (store) => {
  const {
    addPolishDescription,
    addEnglishDescription
  } = store.announcement.create.inputs
  
  return {
    lang: store.app.lang,
    pl: store.announcement.create.inputs.polishDescription,
    en: store.announcement.create.inputs.englishDescription,
    addPolishDescription,
    addEnglishDescription
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
    