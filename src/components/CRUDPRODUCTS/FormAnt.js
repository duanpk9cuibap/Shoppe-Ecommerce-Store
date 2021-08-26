import React from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import styled from "styled-components";

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

function FormAnt(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
    props.onFinish(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Container>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          label="Title:"
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
          name="price"
          label="Price:"
          rules={[
            {
              required: true,
              message: "Please input price"
            },
          ]}>
          <InputNumber
            min={1}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')} />
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

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default FormAnt;
