import axios from 'axios'
import { REACT_APP_AWS_API_URL } from '../Constants'

export const FavorateProductDAL = async (token, data) => {
    let resp = await axios.post(`${REACT_APP_AWS_API_URL}/add-favorate`, data, { headers: { "authorization": `Bearer ${token}` } })
    return resp
}