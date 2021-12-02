import {
  ANNOUNCEMENT_INDEX_MY_TRACK
} from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const render = store.render

  const {
    lang,
    path,
    device
  } = store.app

  const {
    'announcement/index/map': renderMap,
    'announcement/index/catalogue': renderCatalogue,
    [ANNOUNCEMENT_INDEX_MY_TRACK]: renderMy
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
    district,
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
    page
  } = store.announcement.index.inputs

  const {
    announcements,
    amount
  } = store.announcement.index.data

  return {
    render,
    lang,
    path,
    device,
    renderMap,
    renderCatalogue,
    renderMy,
    type,
    category,
    district,
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
    rebuildQueryParams
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncements: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value })
  }
}
    