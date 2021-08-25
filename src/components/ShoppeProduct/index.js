import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../../redux/Product/product.actions';
import { Spin } from "antd";

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
  const [loading, setLoading] = useState(true);


  useEffect(async () => {
    await dispatch(fetchProducts());
    setLoading(false);
  }, []);

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
      <Spin spinning={loading} tip="Loading...">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
          {renderHomepageProduct()}
        </div>
        <div className="pagi">
          <Pagination
            totalProducts={products.length}
            productsPerPage={productsPerPage}
            paginate={paginate} />
        </div>
      </Spin>
    </div>
  )
}

export default ShoppeProduct;


