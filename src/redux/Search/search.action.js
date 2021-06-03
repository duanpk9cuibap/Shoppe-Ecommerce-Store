import searchTypes from './search.types.js';

export const searchProduct = (searchTerm) => ({
  type: searchTypes.SEARCH_PRODUCT,
  payload: searchTerm
})