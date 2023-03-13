export const mapStateToProps = store => {
  const { user, data } = store
  const { role } = user

  return {
    ...data,
    isAdmin: role == 'admin',
  }
}
