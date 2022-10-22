export const mapStateToProps = store => {
  const {
    image: {
      edit: {
        data: { id: imageId, body, width, height, storageKey, storageUrl, storageUrlRandomizedQuaryParameter },
      },
    },
  } = store

  return {
    imageId,
    body,
    width,
    height,
    storageKey,
    storageUrl,
    storageUrlRandomizedQuaryParameter,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    changeData: value => dispatch({ type: 'image/edit/data', value }),
    // TODO
  }
}
