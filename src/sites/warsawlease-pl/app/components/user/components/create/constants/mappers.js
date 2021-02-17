import { ANNOUNCEMENT_CREATE_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    svgs
  } = store.app
  const { publishing: publishingAnnouncement } = store.announcement.create.control

  const {
    step
  } = store.user.create.control

  const {
    [ANNOUNCEMENT_CREATE_TRACK]: creatingAnnouncement
   } = store.render

  return {
    lang,
    authorized: store.user.authorize.data.authorized,
    success: store.user.create.control.success,
    step,
    publishingAnnouncement,
    svgs,
    creatingAnnouncement
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeAnnouncementControl: value => dispatch({ type: 'announcement/create/control', value }),
    changeControl: value => dispatch({ type: 'user/create/control', value }),
    resetControl: value => dispatch({ type: 'user/create/control/reset', value }),
    resetInputs: value => dispatch({ type: 'user/create/inputs/reset', value }),
    resetData: value => dispatch({ type: 'user/create/data/reset', value }),
    resetErrors: value => dispatch({ type: 'user/create/errors/reset', value })
  }
}
