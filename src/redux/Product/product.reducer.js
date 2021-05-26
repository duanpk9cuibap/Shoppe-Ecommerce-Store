import _ from 'lodash';
import productTypes from './product.types';

export const productReducer = (state = {}, action) => {
  switch (action.type) {

    case productTypes.FETCH_PRODUCTS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      }

    case productTypes.FETCH_PRODUCT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case productTypes.CREATE_NEW_PRODUCT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case productTypes.EDIT_PRODUCT:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case productTypes.DELETE_PRODUCT:
      return _.omit(state, action.payload)

    default:
      return state;
  }
}

export default productReducer;