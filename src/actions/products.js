import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const FETCHED_DETAILED_PRODUCT = 'FETCHED_DETAILED_PRODUCT'
export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'


export const fetchAllProducts = () => (dispatch) => {
  request
    .get(`${baseUrl}/products/`)
    .then(response => {
       dispatch({
      type: FETCHED_ALL_PRODUCTS,
      payload: response.body
    })
  })
    .catch(err => alert(err))

  }
  // ... implement!
  // Hint: make sure to use json.products and not json as payload,
  // because you send back an envelope! (so response.body.products)
export const fetchProduct = (productId) => (dispatch) => {
    request
      .get(`${baseUrl}/products/${productId}`)
      .then(response => dispatch({
        type: FETCHED_DETAILED_PRODUCT,
        payload: response.body
      }))
      .catch(err => alert(err))
  }
