// @ts-ignore
export const mapStateToProps = store => {
  return {
    lang: store.app.lang,
    authorized: store.user.authorize.data.authorized,
  }
}

// @ts-ignore
export const mapDispatchToProps = dispatch => {
  return {
    // @ts-ignore
    changeApp: value => dispatch({ type: 'app', value }),
  }
}
