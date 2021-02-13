import {
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK
} from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    lang,
    path,
    device,
    svgs
  } = store.app

  const {
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: renderMap,
    [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: renderCatalogue,
    [ANNOUNCEMENT_INDEX_MY_TRACK]: renderMy
  } = store.render

  const {
    fetch,
    type
  } = store.announcement.index.control

  const {
    admin
  } = store.user.authorize.data

  const {
    category,
    district,
    areaMin,
    areaMax,
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
    lang,
    path,
    device,
    renderMap,
    renderCatalogue,
    renderMy,
    fetch,
    type,
    category,
    district,
    areaMin,
    areaMax,
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
    svgs,
    admin
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncements: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value })
  }
}
    