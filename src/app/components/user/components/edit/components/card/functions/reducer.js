const initialState = {
  connecting: null,
  firstName: null,
  lastName: null,
  businessName: null,
  phoneNumber: null,
  picture: null,
  logo: null,
  contactLanguages: null
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_EDIT_CARD':
      return { ...state, ...action.value }
    default:
      return state
  }
}

