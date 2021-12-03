import {
  PAGE_EDIT_TRACK,
  PAGE_INDEX_TRACK,
  PAGE_SHOW_TRACK,
  PAGE_NOT_FOUND_TRACK
} from '../../../../shared/constants/tracks/tracks.js'

export const mapStateToProps = store => {
  const {
    name: showName
  } = store.page.show.data

  const {
    'page/create': renderCreate,
    [PAGE_EDIT_TRACK]: renderEdit,
    [PAGE_INDEX_TRACK]: renderIndex,
    [PAGE_SHOW_TRACK]: renderShow,
    [PAGE_NOT_FOUND_TRACK]: renderNotFound
  } = store.render

  return {
    renderCreate,
    renderEdit,
    renderIndex,
    renderShow,
    renderNotFound,
    showName
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeShowData: value => dispatch({ type: 'page/show/data', value })
  }
}
