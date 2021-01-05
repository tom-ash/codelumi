import {
  ANNOUNCEMENT_CREATE_TRACK,
  ANNOUNCEMENT_EDIT_TRACK,
  ANNOUNCEMENT_INDEX_TRACK,
  ANNOUNCEMENT_SHOW_TRACK
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language
  } = store.app

  const {
    [ANNOUNCEMENT_CREATE_TRACK]: renderCreate,
    [ANNOUNCEMENT_EDIT_TRACK]: renderEdit,
    [ANNOUNCEMENT_INDEX_TRACK]: renderIndex,
    [ANNOUNCEMENT_SHOW_TRACK]: renderShow
  } = store.render
  
  return {
    language,
    renderCreate,
    renderEdit,
    renderIndex,
    renderShow
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {}
}
    