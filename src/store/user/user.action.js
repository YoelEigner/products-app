// import { GetProducts } from "../../../DAL/GetProducts"
// import { LoginDAL } from "../../../DAL/LoginDAL"
import { GetProducts } from "../../DAL/GetProducts"
import { LoginDAL } from "../../DAL/LoginDAL"


export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await LoginDAL(credentials)
      if (user) dispatch({ type: 'SET_USER', user })
      return user
    } catch (err) {
      console.log('Cannot login', err)
    }
  }
}

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

export const UpdateProduct = (token) => {
  return async (dispatch) => {
    try {
      const products = await GetProducts(token)
      dispatch({ type: 'SET_PRODUCTS', products })
    } catch (err) {
      console.log('Save Products: err in Products', err)
    }
  }
}
export const DeleteProduct = (token) => {
  return async (dispatch) => {
    try {
      const products = await GetProducts(token)
      dispatch({ type: 'SET_PRODUCTS', products })
    } catch (err) {
      console.log('Save Products: err in Products', err)
    }
  }
}