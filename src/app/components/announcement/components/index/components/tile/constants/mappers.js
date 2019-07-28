export const mapStateToProps = (store) => {
  return {
    language: store.app.language,

    connecting: store.announcement.index.control.list.connecting,

    map: store.announcement.index.map
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {

    changePath: (value) => dispatch({ type: 'app/path', value: value }),

    changeMapData: (value) => dispatch({ type: 'announcement/index/data/map', value: value }),
    changeFullData: (value) => dispatch({ type: 'announcement/index/data/full', value: value }),
    changeListData: (value) => dispatch({ type: 'announcement/index/data/list', value: value }),
    changeListControl: (value) => dispatch({ type: 'announcement/index/control/list', value: value })
  }
}
    