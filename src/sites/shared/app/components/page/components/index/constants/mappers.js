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
    pages
  } = store.page.index.data

  const {
    inputtedName
  } = store.page.index.inputs

  return {
    lang,
    urlDataSynced,
    renderManage,
    renderMap,
    pages,
    inputtedName
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'page/index/inputs', value }),
    dispatch
  }
}