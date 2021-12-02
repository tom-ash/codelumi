export const mapStateToProps = store => {
  const { lang, routeSynced } = store.app
  const { 'announcement/index/user': renderMy } = store.render
  const { connecting, fetch, beingDeleted } = store.announcement.index.control
  const { switches, sort, offset } = store.announcement.index.inputs
  const { announcements, amount } = store.announcement.index.data

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
    renderMy,
    routeSynced
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    changeCreateData: value => dispatch({ type: 'announcement/create/data', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value })
  }
}
