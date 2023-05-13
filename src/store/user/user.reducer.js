/**
 * The initial state for the user reducer.
 *
 * @typedef {Object} UserReducerInitialState
 * @property {Object|null} user - The user object. Defaults to null.
 * @property {Array|null} products - The array of products. Defaults to null.
 */

/**
 * The user reducer function.
 *
 * @param {UserReducerInitialState} [state=initialState] - The current state of the reducer.
 * @param {Object} action - The action object to be performed on the state.
 * @param {string} action.type - The type of action to be performed.
 * @param {*} [action.user] - The user object to be set.
 * @param {Array} [action.products] - The array of products to be set.
 * @param {Array} [action.tempToUpdate] - The temporary array of products to be updated.
 * @param {Array} [action.favorate] - The array of products to be favorited.
 * @param {Array} [action.tempToDelete] - The temporary array of products to be deleted.
 * @param {string} [action.search_query] - The search query string.
 * @returns {Object} The new state object.
 */

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
