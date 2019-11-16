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
    sort
  } = store.announcement.index.inputs
  const {
    amount,
    announcements
  } = store.announcement.index.data

  return {
    connecting,
    fetch,
    beingDeleted,
    page,
    switches,
    sort,
    amount,
    announcements
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/index/control/list', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data/list', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs/list', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/list/announcement', value: value }),
    resetControl: (value) => dispatch({ type: 'announcement/index/control/list/reset', value: value }),
    resetInputs: (value) => dispatch({ type: 'announcement/index/inputs/list/reset', value: value }),
    resetData: (value) => dispatch({ type: 'announcement/index/data/list/reset', value: value })
  }
}
