import { ANNOUNCEMENT_CREATE_TRACK } from '../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {
  const render = store.render
  const {
    [ANNOUNCEMENT_CREATE_TRACK]: renderCreate
  } = render
  
  return {
    renderCreate
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    // TODO
  }
}