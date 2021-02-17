import { ANNOUNCEMENT_CREATE_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { lang } = store.app
  const { [ANNOUNCEMENT_CREATE_TRACK]: creatingAnnouncement } = store.render
  const { connecting } = store.user.create.control
  const { token } = store.user.create.data
  const { verification } = store.user.create.errors

  return {
    lang,
    verification,
    token,
    creatingAnnouncement,
    connecting
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeAnnouncementCreateControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeAuthorizeData: value => dispatch({ type: 'user/authorize/data', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    changeErrors: value => dispatch({ type: 'user/create/errors', value }),
  }
}
  