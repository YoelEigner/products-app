
const initialState = {
  user: null,
  products: null
}

export function userReducer(state = initialState, action) {
  var newState = state;
  switch (action.type) {
    case 'SET_USER':
      newState = { ...state, user: action.user }
      break;
    case 'SET_PRODUCTS':
      newState = { ...state, products: action.products }
      break;
    case 'CLEAR_USER':
      newState = {
        ...state, user: null,
      }
      break
    default:
  }
  return newState;
}
