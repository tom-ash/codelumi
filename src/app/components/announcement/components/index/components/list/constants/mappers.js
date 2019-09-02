export const mapStateToProps = (store) => {
  const { control, inputs, data } = store.announcement.index
  return {
    language: store.app.language,
    connecting: control.list.connecting,
    fetch: control.list.fetch,
    page: control.list.page,
    switches: inputs.list.switches,
    sort: inputs.list.sort,
    amount: data.list.amount,
    announcements: data.list.announcements,
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
