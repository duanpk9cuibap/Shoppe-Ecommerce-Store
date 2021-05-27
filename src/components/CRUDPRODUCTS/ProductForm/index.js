import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import './styles.scss';
import Logo from '../../../assets/Logo.png';

function ProductForm(props) {

  const renderInput = ({ input, idFor, label, placeholder, meta }) => {

    const renderError = ({ error, touched }) => {
      return touched && error ?
        (
          <div id="error">{error}</div>
        ) : ""
    }

    return (
      <div className="mb-3">
        <label htmlFor={idFor} className="form-label">
          <strong>{label}</strong>
        </label>
        <input {...input} className="form-control" id={idFor} placeholder={placeholder} autoComplete="off" />
        {renderError(meta)}
      </div>
    )
  }

  const renderTextarea = ({ input, label, meta }) => {

    const renderError = ({ error, touched }) => {
      return touched && error ?
        (
          <div id="error">{error}</div>
        ) : ""
    }

    return (
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          <strong>{label}</strong>
        </label>
        <textarea className="form-control" id="description" rows="3" {...input} autoComplete="off"></textarea>
        {renderError(meta)}
      </div>
    )
  }

  const onFormSubmit = (formValues) => {
    props.onSubmit(formValues);
  }

  return (
    <div className="productForm">
      <Link to='/'>
        <img
          className="productForm__logo"
          src={Logo} alt="" />
      </Link>
      <div className="productForm__container">
        <h5>{props.topLabel}</h5>

        <form onSubmit={props.handleSubmit(onFormSubmit)}>
          <Field name="title" idFor="title" component={renderInput} label="Enter title" placeholder="... Title" />
          <Field name="price" idFor="price" component={renderInput} label="Enter price" placeholder="... $99.95" />
          <Field name="image" idFor="image" component={renderInput} label="Enter the link of the image" placeholder="..." />
          <Field
            name="description"
            component={renderTextarea}
            label="Enter description"
          />
          <button id="submit">Submit</button>
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
  form: 'productForm',
  validate
})(ProductForm);


