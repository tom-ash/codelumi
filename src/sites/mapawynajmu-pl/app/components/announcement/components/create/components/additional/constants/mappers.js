export const mapStateToProps = store => {
  const {
    app,
    announcement: {
      create: {
        inputs
      }
    }
  } = store

  const {
    lang
  } = app

  const {
    category,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    name,
    link,
  } = inputs



  return {
    lang,
    category,
    rentCurrency,
    netRentAmount,
    grossRentAmount,
    area,
    rooms,
    floor,
    totalFloors,
    name,
    link,
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/create/data', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
  }
}
  