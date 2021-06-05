import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Product/product.actions';
import { useHistory } from 'react-router-dom';
import ProductCard from '../ProductCard';

import './styles.scss';

const mapState = ({ search, products }) => ({
  searchTerm: search.searchTerm,
  products: Object.values(products)
})

function ProductsSearchResult() {

  const { searchTerm, products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const searchedProducts = products.filter(product => product.title.indexOf(searchTerm) > 1 || product.description.indexOf(searchTerm) > 1)

  const renderSearchResults = () => {

    if (!searchTerm) {
      return (
        <div>Please type something to search</div>
      )
    } else if (searchTerm) {
      return searchedProducts.map(product => {
        return (
          <ProductCard product={product} />
        )
      })
    }
  }

  return (
    <div className="productResults">
      <h6><strong>{searchedProducts.length} results for "{searchTerm}"</strong></h6>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
        {renderSearchResults()}
      </div>
    </div>
  )
}

export default ProductsSearchResult;





/* import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Product/product.actions';
import { useHistory } from 'react-router-dom';
import ProductCard from '../ProductCard';

import './styles.scss';

const mapState = ({ search, products }) => ({
  searchTerm: search.searchTerm,
  products: Object.values(products)
})

function ProductsSearchResult() {

  const { searchTerm, products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const renderSearchResults = () => {

    if (!searchTerm) {
      return (
        <div>Please type something to search</div>
      )
    } else if (searchTerm) {
      return products.map(product => {
        if (product.title.indexOf(searchTerm) > 1 || product.description.indexOf(searchTerm) > 1) {
          return (
            <ProductCard product={product} />
          )
        }
      })
    }
  }

  return (
    <div className="productResults">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
        {renderSearchResults()}
      </div>
    </div>
  )
}

export default ProductsSearchResult;
*/
