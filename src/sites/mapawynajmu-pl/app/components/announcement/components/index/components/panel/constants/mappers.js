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
    areaMaxInput
  } = store.announcement.index.inputs

  const {
    showArea
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
    showArea,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,
    links
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
