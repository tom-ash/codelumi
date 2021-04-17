export const mapStateToProps = store => {
  const {
    data: pageShowData
  } = store.page.show

  const {
    role
  } = store.user.authorize.data

  return {
    ...pageShowData,
    isAdmin: role == 'admin'
  }
}
  
export const mapDispatchToProps = dispatch => {
  return {
    changeData: value => dispatch({ type: 'page/show/data', value }),
    changeRender: value => dispatch({ type: 'page/render', value })
  }
}
