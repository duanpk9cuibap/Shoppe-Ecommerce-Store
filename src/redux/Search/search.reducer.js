import { searchProduct } from './search.action.js';
import searchTypes from './search.types.js';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_PRODUCT:
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
}

export default searchReducer;