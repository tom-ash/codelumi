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
    category: currentCategory
  } = store.announcement.index.inputs

  const {
    apartmentsAmount,
    housesAmount,
    roomsAmount,
    parkingSpacesAmount,
    usablePremisesAmount,
    officesAmount,
    virtualOfficesAmount,
    coworkingAmount
  } = store.announcement.index.data

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
    coworkingAmount
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
