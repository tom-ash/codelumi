export const reducer = (state = false, action) => {
  switch (action.type) {
    case 'USER_CREATE_SUCCESS':
      return action.value
    default:
      return state
  }
}