import React, { useEffect } from 'react';
import { fetchProduct } from '../../redux/Product/product.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import { addProduct } from '../../redux/Cart/cart.actions';

function ProductDetails(props) {

  const mapState = (state) => ({
    product: state.products[props.match.params.id]
  })

  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {

    dispatch(fetchProduct(props.match.params.id))

  }, [])

  const handleAddToCart = (product) => {
    dispatch(
      addProduct(product)
    );
    history.push('/checkout')
  }

  const renderFetchProduct = () => {
    if (!product) {
      return <div>Loading...</div>
    } else {
      return (
        <div class="card mb-3 productDetails">
          <h5 class="card-title productDetails__title">{product.title}</h5>
          <img src={product.image} class="card-img-top" alt="..." />

          <div class="card-body productDetails__body">
            <p class="card-text"><strong>Description:</strong> {product.description}</p>
            <p class="card-text"><strong class="text-muted">${product.price}</strong></p>
            <button className="addToCart" onClick={() => handleAddToCart(product)}>
              Add to basket
        </button>
          </div>
        </div>
      )
    }
  }

  return (
    <div>{renderFetchProduct()}</div>
  )
}

export default ProductDetails;

