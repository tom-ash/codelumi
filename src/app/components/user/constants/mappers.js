import {
  USER_AUTHORIZE_TRACK,
  USER_SHOW_TRACK
} from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language,
    path
  } = store.app

  const {
    [USER_AUTHORIZE_TRACK]: renderAuthorize,
    [USER_SHOW_TRACK]: renderShow
  } = store.render

  return {
    language,
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
    