import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
                  <Link to={`/products/edit/${product.id}`}><button id="edit">Edit</button></Link>
                  <Link to={`/products/delete/${product.id}`}><button id="delete">Delete</button></Link>
                </div>
              </div>
            </div>
          )
        }
      }
    })
  }

  if (currentUser) {

    const renderYourDatas = () => {
      let count = 0;
      products.map(product => count = currentUser.id === product.userId ? count += 1 : count)
      return count > 0 ?
        ''
        :
        (<div className="yourProducts__datas">
          <h5>You haven't created any products yet!</h5>
        </div>)
    }

    return (
      <div className="yourProducts">
        <div className="yourProducts__title"><h4>LIST OF YOUR PRODUCTS</h4></div>
        {renderYourDatas()}
        <div className="yourProducts__addNew">
          <Link to='/products/new'>
            <button>Add your new product</button>
          </Link>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
          {renderProducts()}</div>
      </div>
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
        <Link to='/login'><button className="signIn">Sign in to continue...</button></Link>
      </div>
    )
  }
}

export default FetchYourOwnProducts;

