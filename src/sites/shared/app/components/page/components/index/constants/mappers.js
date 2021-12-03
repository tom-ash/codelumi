import {
  PAGE_INDEX_MANAGE_TRACK
} from '../../../../../../shared/constants/tracks/tracks.js'

export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const {
    [PAGE_INDEX_MANAGE_TRACK]: renderManage,
    'page/index/map': renderMap 
  } = store.render
  const { pages } = store.page.index.data
  const { inputtedName } = store.page.index.inputs

  return {
    lang,
    routeSynced,
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