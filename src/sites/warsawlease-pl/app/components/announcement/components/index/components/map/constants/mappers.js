import {
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    lang,
    isMobile,
    scripts,
    device,
    svgs
  } = store.app
  const {
    [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: renderCatalogue
  } = store.render

  const {
    connecting,
    mapLoaded,
    type,
    loadMap,
    loadPins,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    fetch
  } = store.announcement.index.control
  
  const {
    announcements,
    pins,
    tileId,
    tile
  } = store.announcement.index.data

  return {
    loadMap,
    loadPins,
    device,
    lang,
    isMobile,
    scripts,
    connecting,
    type,
    mapLoaded,
    announcements,
    pins,
    tileId,
    tile,
    svgs,
    miniListFarthestScrollTop,
    miniListFarthestScrollLeft,
    fetch,
    renderCatalogue
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeTile: value => dispatch({ type: 'announcement/index/data/map/tile', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeAnnouncement: value => dispatch({ type: 'announcement/index/data/announcement', value }),
    changeAnnouncementShowData: value => dispatch({ type: 'announcement/show/data', value })
  }
}
