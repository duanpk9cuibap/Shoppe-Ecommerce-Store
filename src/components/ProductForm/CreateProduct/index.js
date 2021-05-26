import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.scss';
import Logo from '../../../assets/Logo.png';
import { createNewProduct } from '../../../redux/Product/product.actions';

function CreateProduct(props) {

  const dispatch = useDispatch();

  const renderInput = ({ input, label, placeholder, meta }) => {

    const renderError = ({ error, touched }) => {
      return touched && error ?
        (
          <div id="error">{error}</div>
        ) : ""
    }

    return (
      <>
        <label htmlFor="">
          <strong>{label}</strong>
        </label>
        <input  {...input} placeholder={placeholder} autoComplete="off" />
        {renderError(meta)}
      </>
    )
  }

  const onFormSubmit = (formValues) => {
    dispatch(createNewProduct(formValues));
  }

  return (
    <div className="createProduct">
      <Link to='/'>
        <img
          className="createProduct__logo"
          src={Logo} alt="" />
      </Link>
      <div className="createProduct__container">
        <h5>Add your product to Shoppe</h5>

        <form onSubmit={props.handleSubmit(onFormSubmit)}>
          <Field name="title" component={renderInput} label="Enter title" placeholder="... Title" />
          <Field name="price" component={renderInput} label="Enter price" placeholder="... $99.95" />
          <Field name="image" component={renderInput} label="Enter the link of the image" placeholder="..." />
          <Field
            name="description"
            component={renderInput}
            label="Enter description"
            placeholder="... Description" />
          <button id="upload"> Upload</button>
        </form>
      </div>
    </div>
  )
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title/ name"
  }
  if (!formValues.description) {
    errors.description = "You must enter a description"
  }
  if (!formValues.price) {
    errors.price = "You must enter a price"
  }
  if (!formValues.image) {
    errors.image = "You must enter a link"
  }
  return errors;
}

export default reduxForm({
  form: 'createProduct',
  validate
})(CreateProduct);



/* const formWrapped = reduxForm({
  form: 'createProduct',
  validate,
})(CreateProduct);

export default connect(null, { createNewProduct })(formWrapped); */