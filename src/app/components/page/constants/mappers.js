import {
  PAGE_CREATE_TRACK,
  PAGE_INDEX_MAP_TRACK,
  PAGE_SHOW_TRACK,
  PAGE_SHOW_NOT_FOUND_TRACK
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    name: showName
  } = store.page.show.data

  const {
    [PAGE_CREATE_TRACK]: renderCreate,
    [PAGE_INDEX_MAP_TRACK]: renderIndexMap,
    [PAGE_SHOW_TRACK]: renderShow,
    [PAGE_SHOW_NOT_FOUND_TRACK]: renderNotFound
  } = store.render

  return {
    renderCreate,
    renderIndexMap,
    renderShow,
    renderNotFound,
    showName
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeShowData: value => dispatch({ type: 'page/show/data', value })
  }
}
