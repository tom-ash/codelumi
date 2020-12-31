import {
  ANNOUNCEMENT_INDEX_MAP_TRACK,
  ANNOUNCEMENT_INDEX_CATALOGUE_TRACK,
  ANNOUNCEMENT_INDEX_MY_TRACK
} from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = (store) => {
  const {
    language,
    isMobile,
    device,
    scalableVectorGraphics,
  } = store.app

  const {
    [ANNOUNCEMENT_INDEX_MAP_TRACK]: renderMap,
    [ANNOUNCEMENT_INDEX_CATALOGUE_TRACK]: renderCatalogue,
    [ANNOUNCEMENT_INDEX_MY_TRACK]: renderMy
  } = store.render

  const {
    category: currentCategory
  } = store.announcement.index.inputs

  return {
    language,
    isMobile,
    device,
    scalableVectorGraphics,
    renderMap,
    renderCatalogue,
    renderMy,
    currentCategory
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeControl: value => dispatch({ type: 'announcement/index/control', value })
  }
}
