import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';


function Item(product) {

  const { title, image, price, quantity } = product;
  const dispatch = useDispatch();


  const onRemoveCartItem = (product) => {
    dispatch(removeCartItem(product));
  }

  const onAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const onReduceCartItem = (product) => {
    dispatch(reduceCartItem(product))
  };

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={image} alt={title} />
          </td>
          <td>
            {title}
          </td>
          <td>
            <span
              onClick={() => onReduceCartItem(product)}
              className="cartBtn">
              {`<  `}
            </span>
            <span>
              {quantity}
            </span>
            <span
              onClick={() => onAddProduct(product)}
              className="cartBtn">
              {`  >`}
            </span>
          </td>
          <td>
            ${price}
          </td>
          <td align="center">
            <span className="cartBtn remove"
              onClick={() => onRemoveCartItem(product)}>
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Item;
