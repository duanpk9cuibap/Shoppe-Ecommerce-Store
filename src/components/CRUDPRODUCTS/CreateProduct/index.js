import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createNewProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';

function CreateProduct() {

  const dispatch = useDispatch();
  const history = useHistory();


  const onFinish = async (values) => {
    await dispatch(createNewProduct(values));
    console.log("formValues", values);
    history.push('/products');
  }

  return (
    <ProductForm
      onFinish={onFinish}
      initalValues=""
      topLabel="Add new product to your store" />
  )
}

export default CreateProduct;



