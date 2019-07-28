export const mapStateToProps = (store) => {
  return {
    path: store.app.path,
    language: store.app.language,
    fetchAmount: store.announcement.index.control.mini.fetchAmount,
    category: store.announcement.index.inputs.mini.category,
    district: store.announcement.index.inputs.mini.district,
    panelAmount: store.announcement.index.data.mini.panelAmount
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (value) => dispatch({ type: 'app/path', value: value }),
    changeControl: (value) => dispatch({ type: 'announcement/index/control/mini', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs/mini', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data/mini', value: value }),
  }
}
