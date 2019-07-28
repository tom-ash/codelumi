export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    id: store.announcement.show.data.id,
    pictures: store.announcement.show.data.pictures,
    pictureIndex: store.announcement.show.data.pictureIndex
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: (value) => dispatch({ type: 'announcement/show/data', value: value })
  }
}
    