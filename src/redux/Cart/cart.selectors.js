import { createSelector } from 'reselect';

export const selectCartData = state => state.cartData;

export const selectCartItems = createSelector(
  [selectCartData],
  cartData => cartData.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity
      , 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((totalCurentPrice, cartItem) =>
      totalCurentPrice + cartItem.quantity * cartItem.price
      , 0)
);