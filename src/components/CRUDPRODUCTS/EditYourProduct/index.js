import _ from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id));
  }, [])

  const onSubmit = (formValues) => {
    dispatch(editProduct(props.match.params.id, formValues));
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

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchProduct, editProduct })(EditYourProduct);
