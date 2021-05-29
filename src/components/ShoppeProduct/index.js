import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/Cart/cart.actions';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../../redux/Product/product.actions';

import StarIcon from '@material-ui/icons/Star';
import './styles.scss';

const mapState = (state) => ({
  products: Object.values(state.products)
})

function ShoppeProduct() {

  /* const { title, image, price } = product; */
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const handleAddToCart = (product) => {
    dispatch(
      addProduct(product)
    );
    history.push('/checkout')
  }

  const renderHomepageProduct = () => {
    return products.map(product => {
      return (
        
        <div className="col list-products__card">
              <div className="card h-100">
                <img src={product.image} className="card-img-top card__img" alt="..." />
                <div className="card-body">
                  <h5 id ="card__title" className="card-title">{product.title}</h5>
                </div>
                <div className="card-footer">
              <small className="text-muted">
                $
             <strong>{product.price}</strong>
              </small>
              <button className="addToCart" onClick={() => handleAddToCart(product)}>
            Add to basket
        </button>
            </div>
          </div>
              </div>
            
      )
    })
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 list-products">
      {renderHomepageProduct()}
    </div>
  )
}

export default ShoppeProduct;


{/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p><StarIcon /></p>
            ))}
        </div> */}


