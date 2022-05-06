export const mapStateToProps = store => {
  const {
    tutorials
  } = store.page.index

  return {
    tutorials
  }
}
