import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/Product/product.actions';
import ProductCard from '../ProductCard';

const mapState = ({ search, products }) => ({
  searchTerm: search.searchTerm,
  products: Object.values(products)
})

function ProductsSearchResult() {

  const { searchTerm, products } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });

  const renderSearchResults = () => {
    console.log(products)
  }

  return (
    <div>
      {renderSearchResults()}
    </div>
  )
}

export default ProductsSearchResult;
