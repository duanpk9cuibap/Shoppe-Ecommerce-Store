import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import FormAnt from '../FormAnt';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const mapState = (state) => ({
    product: state.products[params.id]
  })
  const { product } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProduct(params.id));
  }, []);

  /* const onSubmit = async (formValues) => {
    console.log(formValues)
    await dispatch(editProduct(params.id, formValues));
    history.push('/products');
  } */

  const onFinish = async (values) => {
    console.log(values)
    await dispatch(editProduct(params.id, values));
    //history.push('/products');
  }

  if (!product) {
    return (
      <div>
        ...Loading
      </div>
    )
  } else
    return (
      /*  <ProductForm
         onSubmit={onSubmit}
         initialValues={_.pick(product, 'title', 'price', 'image', 'description')} /> */
      <FormAnt onFinish={onFinish} />
    )
}

export default EditYourProduct;
