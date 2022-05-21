export const mapStateToProps = store => {
  const {
    tutorials,
    articles
  } = store.page.index

  return {
    tutorials,
    articles
  }
}
