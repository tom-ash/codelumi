export const mapStateToProps = (store) => {
  const {
    language
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
    announcements
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/announcements', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/index/control/list/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/list/reset', value: value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/list/reset', value: value })
  }
}
