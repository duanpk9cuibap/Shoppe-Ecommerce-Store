import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../../redux/Product/product.actions';

const mapState = (state) => ({
  products: state.products
})

function FetchYourOwnProducts() {

  const { products } = useSelector(mapState);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, [])


  return (
    <div>
      List
    </div>
  )
}

export default FetchYourOwnProducts;
