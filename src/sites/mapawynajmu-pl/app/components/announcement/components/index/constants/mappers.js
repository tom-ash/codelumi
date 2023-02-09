export const mapStateToProps = store => {
  const { app, render, control, data, inputs } = store

  const { lang, path, device } = app
  const { 'announcement/index/map': renderMap, 'announcement/index/user': renderMy } = render
  const { type, rebuildQueryParams } = control
  const { announcements, amount, title, admin } = data

  const {
    category,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    offset,
    switches,
    sort,
    page,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
  } = inputs

  return {
    title,
    render,
    lang,
    path,
    device,
    renderMap,
    renderMy,
    type,
    category,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    switches,
    sort,
    page,
    offset,
    announcements,
    amount,
    admin,
    rebuildQueryParams,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    setControl: value => dispatch({ type: 'control', value }),
    setInputs: value => dispatch({ type: 'inputs', value }),
    setData: value => dispatch({ type: 'data', value }),
  }
}
