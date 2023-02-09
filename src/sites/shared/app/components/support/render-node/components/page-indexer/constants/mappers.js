export const mapStateToProps = store => {
  const {
    data
  } = store
  const { tutorials, articles } = data

  return {
    tutorials,
    articles,
  }
}
