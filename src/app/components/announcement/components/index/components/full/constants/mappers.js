export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    device,
    scrollY,
    showAnnouncementIndexCatalogue,
    scalableVectorGraphics
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
    language,
    isMobile,
    device,
    type,
    connecting,
    page,
    announcements,
    scrollY,
    showAnnouncementIndexCatalogue,
    scalableVectorGraphics,
    indexFullFarthestScrollTop
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value })
  }
}
