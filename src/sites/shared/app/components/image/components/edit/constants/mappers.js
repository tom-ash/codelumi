export const mapStateToProps = store => {
  const { data } = store
  const { id: imageId, body, width, height, storageKey, storageUrl, storageUrlRandomizedQuaryParameter } = data

  // TODO: Use inputs.

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
    setData: value => dispatch({ type: 'data', value }),
  }
}
