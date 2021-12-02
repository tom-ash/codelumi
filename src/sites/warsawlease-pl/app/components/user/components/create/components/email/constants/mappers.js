import { USER_CREATE_FORM_TRACK, USER_CREATE_VERIFICATION_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const { lang } = store.app
  const { authorized } = store.user.authorize.data
  const { connecting, step } = store.user.create.control
  const {
    [USER_CREATE_FORM_TRACK]: renderForm,
    [USER_CREATE_VERIFICATION_TRACK]: renderVerification,
    'announcement/create/form': renderAnnouncementCreate
  } = store.render

  return {
    renderForm,
    renderVerification,
    renderAnnouncementCreate,
    lang,
    authorized,
    connecting,
    step
  }
}

export const mapDispatchToProps = dispatch => ({})
