import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../../redux/Product/product.actions';
import './styles.scss';

const mapState = (state) => ({
  products: Object.values(state.products),
  currentUser: state.user.currentUser
})

function FetchYourOwnProducts() {

  const { products, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });


  const renderProducts = () => {
    return products.map(product => {
      if (currentUser) {
        if (currentUser.id === product.userId) {
          return (
            <div className="col list-products__card">
              <div className="card h-100">
                <img src={product.image} className="card-img-top card__img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <a href={`/products/edit/${product.id}`}><button id="edit">Edit</button></a>
                  <a href="#"><button id="delete">Delete</button></a>
                </div>
              </div>
            </div>
          )
        }
      }
    })
  }

  if (currentUser) {
    return (
      <>
        <h5>Manage Products</h5>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 list-products">
          {renderProducts()}</div>
      </>
    )
  }
  else {
    return (
      <div className="loadingToSelling">
        <button class="btn btn-secondary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        <button class="btn btn-secondary" type="button" disabled>
          <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
          Start selling on Shoppe...
                  </button>
        <br />
        <button className="signIn">Sign in</button>
      </div>
    )
  }
}

export default FetchYourOwnProducts;

