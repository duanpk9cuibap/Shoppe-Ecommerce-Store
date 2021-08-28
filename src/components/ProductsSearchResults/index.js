import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Product/product.actions';
import ProductCard from '../ProductCard';

import './styles.scss';
import Pagination from '../Pagination';

const mapState = ({ search, products }) => ({
  searchTerm: search.searchTerm,
  products: Object.values(products)
})

function ProductsSearchResult() {

  const { searchTerm, products } = useSelector(mapState);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const searchedProducts = products.filter(product => product.title.indexOf(searchTerm) > 1 || product.description.indexOf(searchTerm) > 1)

  // Get current products
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProducts - productsPerPage;
  const currentProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProducts);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const renderSearchResults = () => {

    if (!searchTerm) {
      return (
        <div>Please type something to search</div>
      )
    } else if (searchTerm) {
      return currentProducts.map((product, index) => {
        return (
          <ProductCard product={product} key={index} />
        )
      })
    }
  }

  return (
    <div className="productResults">
      <strong style={{ marginLeft: "2rem" }}>{searchedProducts.length} results for "{searchTerm}"</strong>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
        {renderSearchResults()}
      </div>
      <div className="pagi">
        <Pagination
          totalProducts={searchedProducts.length}
          productsPerPage={productsPerPage}
          paginate={paginate} />
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
