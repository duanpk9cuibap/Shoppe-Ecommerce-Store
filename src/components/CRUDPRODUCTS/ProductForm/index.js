import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, InputNumber, Space, Radio, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined, WalletOutlined } from '@ant-design/icons';
import styled from "styled-components";
import './styles.scss';
import Logo from '../../../assets/Logo.png';

const Container = styled.div`
#register{
  width: -webkit-fill-available;
}
.ant-space-item{
  width: -webkit-fill-available;
}
.anticon svg {
  display: block;
}
.ant-btn-text{
   margin-top: 1rem;
   background-color: #febd69;
   border-radius: 3px;
   border: 1px solid;
   border-color: #a88734 #9c7e31 #846a29;
}
.ant-btn-primary{
  margin-top: 1rem;
  background-color: #febd69;
  color:black;
  border-radius: 3px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
}
.ant-btn-text:hover {
  background: #f3a847;
}
.ant-btn-primary:hover {
  background: #f3a847;
}
`;


const { TextArea } = Input;
const { Text, Title } = Typography;

const ProductForm = (props) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const history = useHistory();
  const onFinish = async (values) => {
    console.log('Success:', values);
    await props.onFinish(values);
    setLoadingSubmit(false);
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
    <Container>
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="title"
              label={<Title level={5}>Title:</Title>}
              initialValue={props.initialValues?.title}
              rules={[
                {
                  required: true,
                  message: "Please input title"
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image_1"
              label={<Title level={5}>Image Link:</Title>}
              initialValue={props.initialValues?.image_1}
              rules={[
                {
                  required: true,
                  message: "Please input image link"
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image_2"
              label={<Title level={5}>Extra Image Link <Text disabled>(Optional)</Text></Title>}
              initialValue={props.initialValues?.image_2}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="image_3"
              label={<Title level={5}>Extra Image Link <Text disabled>(Optional)</Text></Title>}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="category"
              label={<Title level={5}>Choose Category:</Title>}
              initialValue={props.initialValues?.category}
              rules={[
                {
                  required: true,
                  message: "Please choose category!"
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Dog">Dog Product</Radio>
                <Radio value="Cat">Cat Product</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="price"
              label={<Title level={5}>Price:</Title>}
              initialValue={props.initialValues?.price}
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
              label={<Title level={5}>Description:</Title>}
              initialValue={props.initialValues?.description}
              rules={[
                {
                  required: true,
                  message: "Please input description!"
                },
              ]}>
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item>
              <Button type="text" htmlType="submit" loading={loadingSubmit} onClick={() => setLoadingSubmit(true)}>
                <WalletOutlined /> Submit</Button>
              <Button type="primary" style={{ marginLeft: "7px" }} onClick={() => history.push("/products/")}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Container>
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


