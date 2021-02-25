export const mapStateToProps = store => {
  const {
    lang,
    isMobile,
    device,
    scrollY
  } = store.app

  const {
    connecting,
    type,
    indexFullFarthestScrollTop
  } = store.announcement.index.control

  const {
    page,
    offset
  } = store.announcement.index.inputs

  const {
    announcements,
    amount
  } = store.announcement.index.data

  return {
    offset,
    amount,
    lang,
    isMobile,
    device,
    type,
    connecting,
    page,
    announcements,
    scrollY,
    indexFullFarthestScrollTop
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value })
  }
}
