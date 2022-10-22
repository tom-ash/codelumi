export const mapStateToProps = store => {
  const {
    announcement: { create },
  } = store
  const {
    selectableSkills,
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  } = create

  return {
    selectableSkills,
    selectedSkills,
    remote,
    hybrid,
    office,
    b2b,
    b2bMax,
    b2bMin,
    employment,
    employmentMax,
    employmentMin,
    civilContract,
    civilContractMax,
    civilContractMin,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setStore: value => dispatch({ type: 'announcement/create', value }),
  }
}
