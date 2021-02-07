import {
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  RENDER_SIDE_LINKS_TRACK
} from '../constants/tracks'

export const mapStateToProps = (store) => {
  const {
    lang,
    device
  } = store.app
  const {
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: renderMap,
    [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: renderCatalogue
  } = store.render
  const { render } = store
  const { authorized } = store.user.authorize.data
  const {
    data: announcementCreateData
  } = store.announcement.create
  const {
    data: announcementShowData
  } = store.announcement.show
  const { data: pageShowData } = store.page.show
  const { [RENDER_SIDE_LINKS_TRACK]: renderSideLinks } = store.scaffold.header.control


  return {
    lang,
    authorized,
    device,
    announcementCreateData,
    announcementShowData,
    render,
    pageShowData,
    renderMap,
    renderCatalogue,
    renderSideLinks
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetAnnouncementIndexInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeControl: value => dispatch({ type: 'scaffold/header/control', value }),
    changeAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
  