import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../redux/Cart/cart.actions';

import './styles.scss';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    dispatch(
      addProduct(product)
    );
    history.push('/checkout')
  }

  const onCardClick = (e) => {
    e.preventDefault();
    history.push(`products/${product.id}`)
  }
  const { id, image_1, title, price } = product;
  return (
    <div key={id} className="col list-products__card">
      <div onClick={onCardClick} className="card h-100">
        <img src={image_1} className="card-img-top card__img" alt="..." />
        <div className="card-body">
          <h5 id="card__title" className="card-title">{title}</h5>
        </div>
        <div onClick={e => e.stopPropagation()} className="card-footer">
          <small className="text-muted">
            $
            <strong>{price}</strong>
          </small>
          <button className="addToCart" onClick={() => handleAddToCart(product)}>
            Add to basket
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
