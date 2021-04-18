import { ANNOUNCEMENT_CREATE_EDIT_TRACK } from '../../../../../../../../shared/constants/tracks/tracks'

export const mapStateToProps = store => {

  const {
    [ANNOUNCEMENT_CREATE_EDIT_TRACK]: renderEdit
  } = store.render

  return {
    renderEdit,
    lang: store.app.lang,
    files: store.announcement.create.inputs.picFiles,
    blobs: store.announcement.create.inputs.blobs,
    error: store.announcement.create.errors.pictures,
    addingPicture: store.announcement.create.control.addingPicture
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeInputs: value => dispatch({ type: 'announcement/create/inputs', value }),
    changeErrors: value => dispatch({ type: 'announcement/create/errors', value }),
    changeControl: value => dispatch({ type: 'announcement/create/control', value })
  }
}
