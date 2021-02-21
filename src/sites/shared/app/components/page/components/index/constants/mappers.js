import {
  PAGE_INDEX_MANAGE_TRACK,
  PAGE_INDEX_MAP_TRACK
} from '../../../../../../shared/constants/tracks/tracks.js'

export const mapStateToProps = store => {
  const {
    lang,
    urlDataSynced
  } = store.app

  const {
    [PAGE_INDEX_MANAGE_TRACK]: renderManage,
    [PAGE_INDEX_MAP_TRACK]: renderMap
  } = store.render

  const {
    names
  } = store.page.index.data

  const {
    name
  } = store.page.index.inputs

  return {
    lang,
    urlDataSynced,
    renderManage,
    renderMap,
    names,
    name
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/index/inputs', value }),
    dispatch
  }
}