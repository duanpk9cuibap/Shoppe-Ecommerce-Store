//import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useParams().id;
  const mapState = (state) => ({
    product: state.products[id]
  })
  const { product } = useSelector(mapState);

  useEffect(() => {
    const currentProduct = async () => {
      await dispatch(fetchProduct(id));
    }
    currentProduct();
  }, [id]);


  const onFinish = async (values) => {
    console.log(values)
    await dispatch(editProduct(id, values));
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
