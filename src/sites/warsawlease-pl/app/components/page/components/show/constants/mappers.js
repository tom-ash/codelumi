export const mapStateToProps = store => {
  const {
    data: pageShowData
  } = store.page.show
  const {
    admin: isAdmin
  } = store.user.authorize.data
  return {
    ...pageShowData,
    isAdmin
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: value => dispatch({ type: 'page/show/data', value }),
    changeRender: value => dispatch({ type: 'page/render', value })
  }
}
