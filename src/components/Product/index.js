import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Cart/cart.actions';
import { useHistory } from 'react-router-dom';


import StarIcon from '@material-ui/icons/Star';

function Product(product) {

  const { title, image, price } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(
      addProduct(product)
    );
    history.push('/checkout')
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}><StarIcon /></p>
            ))}


        </div>
      </div>
      <img src={image} alt="" />
      <button className="addToCart" onClick={() => handleAddToCart(product)}>
        Add to basket
      </button>
    </div>
  )
}

export default Product;
