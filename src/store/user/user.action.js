import { DeleteProductDAL } from "../../DAL/DeleteProduct"
import { FavorateProductDAL } from "../../DAL/FavorateProduct"
import { GetProducts } from "../../DAL/GetProducts"
import { LoginDAL } from "../../DAL/LoginDAL"
import { NewProductDAL } from "../../DAL/NewProduct"
import { UpdateProducts } from "../../DAL/UpdateProducts"


/**
 * Logs in a user and dispatches a "SET_USER" action with the user data.
 * @param {Object} credentials - The user's login credentials.
 * @param {string} credentials.username - The user's username.
 * @param {string} credentials.password - The user's password.
 */
export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const response = await LoginDAL(credentials)
      const user = response.data
      if (response.status === 200) dispatch({ type: 'SET_USER', user })
      return user
    } catch (err) {
      console.log('Cannot login', err)
    }
  }
}

/**
 * Retrieves products from the server and dispatches a "SET_PRODUCTS" action with the products data.
 * @param {string} token - The user's authentication token.
 */
export const onGetProducts = (token) => {
  return async (dispatch) => {
    try {
      const products = await GetProducts(token)
      dispatch({ type: 'SET_PRODUCTS', products })
    } catch (err) {
      console.log('Save Products: err in Products', err)
    }
  }
}

/**
 * Updates a product on the server and dispatches an "UPDATE_PRODUCT" action with the updated product data.
 * @param {Array<Object>} products - The list of products.
 * @param {Object} updated - The updated product data formatted for the API.
 * @param {string} updated.ID - The ID of the updated product.
 * @param {string} updated.name - The updated name of the product.
 * @param {string} updated.description - The updated description of the product.
 * @param {number} updated.price - The updated price of the product.
 * @param {number} updated.quantity - The updated quantity of the product.
 * @param {string} token - The user's authentication token.
 */
export const UpdateProduct = (products, updated, token) => {
  return async (dispatch) => {
    let obj = { "ID": updated.ID, "name": updated.name, "description": updated.description, "price": updated.price, "quantity": updated.quantity }
    const response = await UpdateProducts(token, obj, obj.ID)
    if (response.status === 200) {
      let tempToUpdate = [...products]
      let index = tempToUpdate.findIndex(item => item.ID === updated.ID);
      tempToUpdate[index] = updated
      try {
        dispatch({ type: 'UPDATE_PRODUCT', tempToUpdate })
      } catch (err) {
        console.log('Update product: err in update product', err)
      }
    }
    else {
      alert(response.status)
    }
  }
}

/**
 * Deletes a product from the server and dispatches a "DELETE_PRODUCT" action with the updated list of products data.
 * @param {Array<Object>} products - The list of products.
 * @param {string} id - The ID of the product to delete.
 * @param {string} token - The user's authentication token.
 */
export const DeleteProduct = (products, id, token) => {
  return async (dispatch) => {
    const response = await DeleteProductDAL(token, id)
    if (response.status === 200) {
      let tempToDelete = [...products]
      let index = tempToDelete.findIndex(item => item.ID === id);
      tempToDelete.splice(index, 1)
      try {
        dispatch({ type: 'DELETE_PRODUCT', tempToDelete })
      } catch (err) {
        console.log('Delete product: err in Delete product', err)
      }
    }
    else {
      alert('Error deleiting item', response.status)
    }

  }
}

/**
 * Save a new product.
 * @param {Object} data - The new product data.
 * @param {string} token - The authentication token.
 */
export const SaveNewProduct = (data, token) => {
  return async (dispatch) => {
    try {
      let product = { "name": data.name, "description": data.description, "price": data.price, "quantity": data.quantity }
      const response = await NewProductDAL(product, token)
      if (response.status === 200) {
        try {
          product.ID = response?.data?.ProductId
          dispatch({ type: 'NEW_PRODUCT', product })
        } catch (err) {
          console.log('New Product: err in Save new product', err)
        }
      }
    } catch (err) {
      console.log('New Product: err in Save new product', err)
    }
  }
}

/**
 * Update a product's favorite status.
 * @param {Array} products - The array of products.
 * @param {Object} data - The product ID and favorite status.
 * @param {string} token - The authentication token.
 */
export const FavorateProduct = (products, data, token) => {
  return async (dispatch) => {
    let obj = { "ID": data.ID, "favorate": data.favorate }
    const response = await FavorateProductDAL(token, obj)
    if (response.status === 200) {
      let favorate = [...products]
      let index = favorate.findIndex(item => item.ID === data.ID);
      favorate[index]['favorate'] = data.favorate
      try {
        dispatch({ type: 'FAVORATE_PRODUCT', favorate })
      } catch (err) {
        console.log('Update favorate: err in update favorate', err)
      }
    }
    else {
      alert(response.status)
    }
  }
}

/**
 * Set the search query.
 * @param {string} search_query - The search query.
 */
export const onSerachQuery = (search_query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'SET_SEARCH_QUERY', search_query })
    } catch (err) {
      console.log('Search: err in searching', err)
    }
  }
}