import {
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK
} from '../../../../../../shared/constants/tracks/tracks'
import {
  SHOW_MENU
} from '../constants/tracks'

export const mapStateToProps = store => {
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
    lang_ver_urls: pageLangUrls
  } = store.page.show.data
  const { [SHOW_MENU]: renderMenu } = store.scaffold.header.control

  return {
    lang,
    authorized,
    device,
    render,
    renderMap,
    renderCatalogue,
    renderMenu,
    pageLangUrls
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    resetAnnouncementIndexControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetAnnouncementIndexInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetAnnouncementIndexData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changeControl: value => dispatch({ type: 'scaffold/header/control', value })
  }
}
  