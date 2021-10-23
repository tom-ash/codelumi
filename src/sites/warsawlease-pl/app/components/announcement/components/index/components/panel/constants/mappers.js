import {
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    device
  } = store.app

  const { render } = store

  const {
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: renderMap,
    [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: renderCatalogue,
    [ANNOUNCEMENT_INDEX_MY_TRACK]: renderMy
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
    renderCatalogue,
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
    areaMaxInput
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
