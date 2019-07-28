export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    connecting: store.announcement.index.control.list.connecting,
    fetched: store.announcement.index.control.list.fetched,
    page: store.announcement.index.control.list.page,
    switches: store.announcement.index.inputs.list.switches,
    sort: store.announcement.index.inputs.list.sort,
    amount: store.announcement.index.data.list.amount,
    announcements: store.announcement.index.data.list.announcements,
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value}),
    changeControl: (value) => dispatch({ type: 'announcement/index/control/list', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data/list', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs/list', value: value }),
    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/list/announcement', value: value }),
    
  }
}
