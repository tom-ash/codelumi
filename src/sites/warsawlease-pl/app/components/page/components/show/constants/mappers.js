export const mapStateToProps = (store) => {
  // const {
  //   admin: isAdmin
  // } = store.user.authorize.data

  // const {
    // name,
    // url,
    // body,
    // style,
    // title,
    // description,
    // keywords,
    // canonical_url,
    // picture,
    // meta,
    // lang_vers
  // } = store.page.show

  // const {
  //   name: nameCreate
  // } = store.page.create.inputs

  // console.log(body)

  return {
    ...store.page.show.data
  }
}
  
export const mapDispatchToProps = (dispatch) => {
  return {
    changeData: value => dispatch({ type: 'page/show/data', value }),
    changeRender: value => dispatch({ type: 'page/render', value })
  }
}
