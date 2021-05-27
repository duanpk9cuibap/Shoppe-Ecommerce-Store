import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchProduct, editProduct } from '../../../redux/Product/product.actions';
import ProductForm from '../ProductForm';


const EditYourProduct = (props) => {
  console.log(props);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id));
  })

  const onFormSubmit = (formValues) => {

  }
  if (!props.product) {
    return (
      <div>
        ...Loading
      </div>
    )
  }
  return (
    <div>
      <ProductForm
        initialValues={props.product}
        onSubmit={onFormSubmit} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchProduct, editProduct })(EditYourProduct);
