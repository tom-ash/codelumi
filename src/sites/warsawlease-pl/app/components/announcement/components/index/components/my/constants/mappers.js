import {
  ANNOUNCEMENT_INDEX_MY_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const {
    lang,
    svgs,
    urlDataSynced
  } = store.app
  const {
    [ANNOUNCEMENT_INDEX_MY_TRACK]: renderMy
  } = store.render
  const {
    connecting,
    fetch,
    beingDeleted
  } = store.announcement.index.control
  const {
    page,
    switches,
    sort,
    offset
  } = store.announcement.index.inputs
  const {
    amount,
    announcements
  } = store.announcement.index.data

  return {
    lang,
    connecting,
    fetch,
    beingDeleted,
    offset,
    switches,
    sort,
    amount,
    announcements,
    svgs,
    renderMy,
    urlDataSynced
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    changeCreateData: value => dispatch({ type: 'announcement/create/data', value }),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value })
  }
}
