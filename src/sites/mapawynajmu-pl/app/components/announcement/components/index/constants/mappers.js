export const mapStateToProps = store => {
  const render = store.render

  const {
    lang,
    path,
    device
  } = store.app

  const {
    'announcement/index/map': renderMap,
    'announcement/index/user': renderMy
  } = store.render

  const {
    type,
    rebuildQueryParams
  } = store.announcement.index.control

  const {
    admin
  } = store.user.authorize.data

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
    priceMaxInput
  } = store.announcement.index.inputs

  const {
    announcements,
    amount,
    title
  } = store.announcement.index.data

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
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value })
  }
}
    