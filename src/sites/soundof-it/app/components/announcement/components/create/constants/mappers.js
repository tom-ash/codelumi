export const mapStateToProps = store => {
  const { announcement: { create } } = store
  const { selectableSkills, selectedSkills } = create
  
  return {
    selectableSkills,
    selectedSkills
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeState: value => dispatch({ type: 'announcement/create', value }),
  }
}
