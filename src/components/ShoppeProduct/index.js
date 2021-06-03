import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../../redux/Product/product.actions';

import './styles.scss';
import Pagination from '../Pagination';
import ProductCard from '../ProductCard';

const mapState = (state) => ({
  products: Object.values(state.products)
})

function ShoppeProduct() {

  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);


  useEffect(() => {
    dispatch(fetchProducts());
  });

  // Get current products
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProducts - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProducts);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const renderHomepageProduct = () => {
    return currentProducts.map(product => {
      return (
        <ProductCard product={product} />
      )
    })
  }

  return (
    <div className="productPage">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
        {renderHomepageProduct()}
      </div>
      <div className="pagi">
        <Pagination
          totalProducts={products.length}
          productsPerPage={productsPerPage}
          paginate={paginate} /></div>
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


