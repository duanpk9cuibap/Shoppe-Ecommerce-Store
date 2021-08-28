import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, InputNumber, Radio, Typography } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
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
.ant-btn-ghost{
  margin-top: 1rem;
  color:black;
  border-radius: 3px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
}
.ant-btn-text:hover {
  background: #f3a847;
}
.ant-btn-ghost:hover {
  background: #a88734;
}
`;

const { TextArea } = Input;
const { Text, Title } = Typography;

const ProductForm = (props) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const history = useHistory();
  const onFinish = async (values) => {
    console.log('Success:', values);
    setLoadingSubmit(true);
    await props.onFinish(values);
    setLoadingSubmit(false);
  };
  console.log("initialvalues", props.initialValues);
  const onFinishFailed = (errorInfo) => {
    setLoadingSubmit(false);
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();
  useEffect(() => {
    if (!!props.initialValues) {
      form.setFieldsValue({
        title: props.initialValues?.title || '',
        image_1: props.initialValues?.image_1 || '',
        image_2: props.initialValues?.image_2 || '',
        image_3: props.initialValues?.image_3 || '',
        category: props.initialValues?.category || '',
        price: props.initialValues?.price || '',
        description: props?.initialValues?.description || '',
      })
    }

  }, [props.initialValues])

  return (
    <Container>
      <div className="productForm">
        <Link to='/'>
          <img
            className="productForm__logo"
            src={Logo} alt="" />
        </Link>
        <div className="productForm__container">

          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="title"
              label={<Title level={5}>Title:</Title>}
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
              rules={[
                {
                  required: true,
                  message: "Please input description!"
                },
              ]}>
              <TextArea rows={7} />
            </Form.Item>

            <Form.Item>
              <Button type="text" htmlType="submit" loading={loadingSubmit}>
                <WalletOutlined /> Submit</Button>
              <Button type="ghost" style={{ marginLeft: "7px" }} onClick={() => history.push("/products/")}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Container>
  )
}

export default ProductForm;


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

/* <h5>{props.topLabel}</h5> */

/* <form onSubmit={props.handleSubmit(onFormSubmit)}>
          <Field name="title" idFor="title" component={renderInput} label="Enter title" placeholder="... Title" />
          <Field name="price" idFor="price" component={renderInput} label="Enter price" placeholder="... $99.95" />
          <Field name="image" idFor="image" component={renderInput} label="Enter the link of the image" placeholder="..." />
          <Field
            name="description"
            component={renderTextarea}
            label="Enter description"
          />
          <button id="submit">Submit</button>
        </form> */

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