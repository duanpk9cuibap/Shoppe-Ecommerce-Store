import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer'
import productReducer from './Product/product.reducer';
import searchReducer from './Search/search.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cartData: cartReducer,
  form: formReducer,
  products: productReducer,
  search: searchReducer
})

export const configStorage = ({
  key: 'root',
  storage,
  whitelist: ['cartData']
});

export default persistReducer(configStorage, rootReducer);