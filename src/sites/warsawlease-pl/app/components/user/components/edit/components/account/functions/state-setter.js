function userEditAccountStateSetter(routeData) {
  const { initialState: state } = routeData
  const { changeApp, changeUserEditData: changeData } = this.props

  changeData(state)

  changeApp({ routeDataSet: true })
}
  
export default userEditAccountStateSetter
  