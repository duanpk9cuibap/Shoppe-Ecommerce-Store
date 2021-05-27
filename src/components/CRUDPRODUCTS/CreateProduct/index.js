import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createNewProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';

function CreateProduct() {

  const dispatch = useDispatch();
  const history = useHistory();


  const onFormSubmit = (formValues) => {
    dispatch(createNewProduct(formValues));
    history.push('/products');
  }

  return (
    <ProductForm
      onSubmit={onFormSubmit}
      topLabel="Add new product to your store" />
  )
}

export default CreateProduct;



