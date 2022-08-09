export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    device
  } = store.app

  const { render, links } = store

  const {
    'announcement/index/map': renderMap,
    'announcement/index/user': renderMy
  } = render

  const {
    apartmentsAmount,
    housesAmount,
    roomsAmount,
    parkingSpacesAmount,
    usablePremisesAmount,
    officesAmount,
    virtualOfficesAmount,
    coworkingAmount,
    currentCategory
  } = store.announcement.index.data

  const {
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput
  } = store.announcement.index.inputs

  const {
    showArea,
    showPricePanel
  } = store.announcement.index.control

  return {
    lang,
    isMobile,
    device,
    render,
    renderMap,
    renderMy,
    currentCategory,
    apartmentsAmount,
    housesAmount,
    roomsAmount,
    parkingSpacesAmount,
    usablePremisesAmount,
    officesAmount,
    virtualOfficesAmount,
    coworkingAmount,
    links,
    showArea,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    showPricePanel,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
