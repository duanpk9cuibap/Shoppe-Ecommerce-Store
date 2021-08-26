import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, InputNumber, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import styled from "styled-components";
import './styles.scss';
import Logo from '../../../assets/Logo.png';

const Container = styled.div`
#register{
  width: -webkit-fill-available;
}
.ant-btn-text{
   width: 100%;
   margin-top: 1rem;
   background-color: #F3A847;
   border-radius: 2px;
   border: 1px solid;
   border-color: #a88734 #9c7e31 #846a29;
}
`;



function ProductForm(props) {

  const onFinish = (values) => {
    console.log('Success:', values);
    props.onFinish(values);
  };
  console.log("initialvalues", props.initialValues)
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  /* const renderError = ({ error, touched }) => {
    return touched && error ?
      (
        <div id="error">{error}</div>
      ) : ""
  } */

  /* const renderInput = ({ input, idFor, label, placeholder, meta }) => {
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
 */
  return (
    <div className="productForm">
      <Link to='/'>
        <img
          className="productForm__logo"
          src={Logo} alt="" />
      </Link>
      <div className="productForm__container">
        {/* <h5>{props.topLabel}</h5> */}

        {/* <form onSubmit={props.handleSubmit(onFormSubmit)}>
          <Field name="title" idFor="title" component={renderInput} label="Enter title" placeholder="... Title" />
          <Field name="price" idFor="price" component={renderInput} label="Enter price" placeholder="... $99.95" />
          <Field name="image" idFor="image" component={renderInput} label="Enter the link of the image" placeholder="..." />
          <Field
            name="description"
            component={renderTextarea}
            label="Enter description"
          />
          <button id="submit">Submit</button>
        </form> */}
        <Form
          layout="vertical"
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="title"
            label="Title:"
            initialValue={props.initialValues.title}
            rules={[
              {
                required: true,
                message: "Please input title"
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.List name="images">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8, width: "100%" }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "first"]}
                      fieldKey={[fieldKey, "first"]}
                      rules={[{ required: true, message: "Missing images links" }]}
                    >
                      <Input placeholder="Input image link" style={{ width: "90%" }} />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Image Link Of Your Product
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name="price"
            label="Price:"
            rules={[
              {
                required: true,
                message: "Please input price!"
              }
            ]}>
            <InputNumber
              min={1}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>


          <Form.Item
            name="description"
            label="Description:"
            rules={[
              {
                required: true,
                message: "Please input description!"
              },
            ]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="ghost" style={{ marginLeft: "7px" }}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

/* const validate = (formValues) => {
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
} */

/* export default reduxForm({
  form: 'productForm',
  validate
})(ProductForm); */

export default ProductForm;


