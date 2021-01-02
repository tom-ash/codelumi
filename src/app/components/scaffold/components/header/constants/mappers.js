import { strike } from 'managed-inputs'
import { PAGE_NOT_FOUND_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language,
    device
  } = store.app

  const {
    render
  } = store

  const {
    authorized
  } = store.user.authorize.data

  const {
    data: announcementShowData
  } = store.announcement.show

  const {
    data: pageShowData
  } = store.page.show

  return {
    language,
    authorized,
    device,
    announcementShowData,
    render,
    pageShowData
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetAnnouncementIndexInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeControl: value => dispatch({ type: 'scaffold/header/control', value })
  }
}
  