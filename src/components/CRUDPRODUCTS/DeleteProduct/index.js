import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchProduct } from '../../../redux/Product/product.actions';

import ModalForm from '../../ModalForm';
import './styles.scss';

function DeleteProduct(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id));
  });

  if (!props.product) {
    return (
      <div>
        ...Loading
      </div>
    )
  }
  return (
    <div>
      <ModalForm product={props.product} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { product: state.products[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchProduct })(DeleteProduct);
