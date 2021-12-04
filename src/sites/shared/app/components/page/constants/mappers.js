import {
  PAGE_NOT_FOUND_TRACK
} from '../../../../shared/constants/tracks/tracks.js'

export const mapStateToProps = store => {
  const {
    name: showName
  } = store.page.show.data

  const {
    'page/create': renderCreate,
    'page/edit': renderEdit,
    'page/index': renderIndex,
    'page/show': renderShow,
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
