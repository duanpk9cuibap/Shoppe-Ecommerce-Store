import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const mapState = (state) => ({
    product: state.products[params.id]
  })
  const { product } = useSelector(mapState);
  console.log("product", product);

  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, [params.id]);


  const onFinish = async (values) => {
    console.log(values)
    await dispatch(editProduct(params.id, values));
    history.push('/products');
  }
  return (
    <>
      <ProductForm
        onFinish={onFinish}
        initialValues={product}
      />
    </>
  )
}

export default EditYourProduct;
