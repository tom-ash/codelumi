export const mapStateToProps = store => {
  const { announcement: { create } } = store
  const { 
    selectableSkills,
    selectedSkills,
    remote,
    hybrid,
    office
  } = create
  
  return {
    selectableSkills,
    selectedSkills,
    remote,
    hybrid,
    office
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    setStore: value => dispatch({ type: 'announcement/create', value }),
  }
}
