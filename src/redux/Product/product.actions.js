import apis from './apis.js';
import productTypes from './product.types.js';


export const createNewProduct = formValues => async (dispatch, getState) => {
  const { id } = getState().user.currentUser;
  const userId = id;

  const response = await apis.post('/products', { ...formValues, userId });

  dispatch({
    type: productTypes.CREATE_NEW_PRODUCT,
    payload: response.data
  });
};


export const fetchProducts = () => async dispatch => {
  const response = await apis.get('/products');
  dispatch({
    type: productTypes.FETCH_PRODUCTS,
    payload: response.data
  })
};

export const fetchProduct = (id) => async dispatch => {
  const response = await apis.get(`products/${id}`);
  dispatch({
    type: productTypes.FETCH_PRODUCT,
    payload: response.data
  })
};

export const editProduct = (id, formValues) => async dispatch => {
  const response = await apis.put(`products/${id}`, formValues);
  dispatch({
    type: productTypes.EDIT_PRODUCT,
    payload: response.data
  })
};

export const deleteProduct = (id) => async dispatch => {
  await apis.delete(`products/${id}`);
  dispatch({
    type: productTypes.DELETE_PRODUCT,
    payload: id
  })
}