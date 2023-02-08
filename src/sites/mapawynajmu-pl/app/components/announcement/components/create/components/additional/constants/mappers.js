export const mapStateToProps = store => {
  const {
    app,
    announcement: {
      create: { inputs },
    },
  } = store

  const { lang } = app

  const { category, rentCurrency, netRentAmount, grossRentAmount, area, rooms, floor, totalFloors, name, link } = inputs

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
    setInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
  }
}
