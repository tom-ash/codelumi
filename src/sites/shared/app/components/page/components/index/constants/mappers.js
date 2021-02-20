import {
  PAGE_INDEX_MANAGE_TRACK,
  PAGE_INDEX_MAP_TRACK
} from '../../../../../../shared/constants/tracks/tracks.js'

console.log(PAGE_INDEX_MANAGE_TRACK)

export const mapStateToProps = store => {
  const {
    lang,
    urlDataSynced
  } = store.app

  const {
    [PAGE_INDEX_MANAGE_TRACK]: renderManage,
    [PAGE_INDEX_MAP_TRACK]: renderMap
  } = store.render

  return {
    lang,
    urlDataSynced,
    renderManage,
    renderMap
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}