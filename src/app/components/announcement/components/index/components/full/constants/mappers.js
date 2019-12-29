export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    device,
    scrollY
  } = store.app
  const {
    connecting,
    type
  } = store.announcement.index.control
  const { page, offset } = store.announcement.index.inputs
  const { announcements, amount } = store.announcement.index.data

  return {
    offset,
    amount,
    language,
    isMobile,
    device,
    type,
    connecting,
    page,
    announcements,
    scrollY
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: (value) => dispatch({ type: 'announcement/index/control', value: value }),
    changeInputs: (value) => dispatch({ type: 'announcement/index/inputs', value: value }),
    changeData: (value) => dispatch({ type: 'announcement/index/data', value: value }),

    changeAnnouncement: (value) => dispatch({ type: 'announcement/index/data/announcements', value: value })
  }
}
