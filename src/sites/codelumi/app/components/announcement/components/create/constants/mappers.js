export const mapStateToProps = store => {
  const { announcement: { create } } = store
  const { selectableSkills, selectedSkill } = create

  const interimSelectableSkills = [
    {
      tag: 'javascript',
      name: 'JavaScript',
      selected: 1
    },
    {
      tag: 'ruby',
      name: 'Ruby'
    }
  ]
  
  return {
    selectableSkills: interimSelectableSkills,
    selectedSkill
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    // TODO
  }
}
