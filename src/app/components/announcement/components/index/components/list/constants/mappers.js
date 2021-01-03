export const mapStateToProps = (store) => {
  const {
    language,
    scalableVectorGraphics
  } = store.app
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
    language,
    connecting,
    fetch,
    beingDeleted,
    offset,
    switches,
    sort,
    amount,
    announcements,
    scalableVectorGraphics
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/list/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/list/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/list/reset', value })
  }
}
