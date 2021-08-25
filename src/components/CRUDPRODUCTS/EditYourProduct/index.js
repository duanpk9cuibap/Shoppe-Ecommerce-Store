import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  console.log("params", params);

  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, [])

  const onSubmit = async (formValues) => {
    await dispatch(editProduct(props.match.params.id, formValues));
    history.push('/products');
  }
  if (!props.product) {
    return (
      <div>
        ...Loading
      </div>
    )
  }
  return (
    <ProductForm
      onSubmit={onSubmit}
      initialValues={_.pick(props.product, 'title', 'price', 'image', 'description')} />
  )
}

export default EditYourProduct;
