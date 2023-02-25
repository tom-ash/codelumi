export const mapStateToProps = store => {
  const {
    inputs
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
  } = inputs

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
    setInputs: value => dispatch({ type: 'inputs', value }),
  }
}
