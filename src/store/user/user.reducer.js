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
    case 'UPDATE_PRODUCT':
      newState = { ...state, products: action.tempToUpdate }
      break;
    case 'FAVORATE_PRODUCT':
      newState = { ...state, products: action.favorate }
      break;
    case "DELETE_PRODUCT":
      newState = { ...state, products: action.tempToDelete }
      break
    case "SET_SEARCH_QUERY":
      newState = { ...state, search_query: action.search_query }
      break
    case "NEW_PRODUCT":
      let tempNew = [...state.products]
      tempNew.push(action.product)
      newState = { ...state, products: tempNew }
      break
    case 'CLEAR_USER':
      newState = { ...state, user: null }
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
