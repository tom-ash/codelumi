import {
  USER_CREATE_TRACK,
  USER_EDIT_TRACK,
  USER_AUTHORIZE_TRACK,
  USER_SHOW_TRACK,
  USER_EDIT_PASSWORD_TRACK
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    lang,
    path
  } = store.app

  const {
    [USER_CREATE_TRACK]: renderCreate,
    [USER_EDIT_TRACK]: renderEdit,
    [USER_EDIT_PASSWORD_TRACK]: renderEditPassword,
    [USER_AUTHORIZE_TRACK]: renderAuthorize,
    [USER_SHOW_TRACK]: renderShow,
  } = store.render

  return {
    lang,
    renderCreate,
    renderEdit,
    renderEditPassword,
    renderAuthorize,
    renderShow
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
  }
}
    