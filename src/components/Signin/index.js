import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Divider, notification } from 'antd';

import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import Logo from '../../assets/Logo.png';
import './styles.scss';
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

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Signin = () => {

  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [form] = Form.useForm();

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser])


  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const { email, password } = values;
    dispatch(emailSignInStart({ email, password }));

  };

  return (
    <Container>
      <div className="signin">
        <Link to='/'>
          <img
            className="signin__logo"
            src={Logo} alt="" />
        </Link>

        <div className="signin__container">
          <h3>Sign-In</h3>

          <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="Email:"
              initialValue="nqduan@gmail.com"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password:"
              initialValue="123123"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                { min: 6, message: 'Password must be minimum 6 characters.' }
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item >
              <Button type="text" htmlType="submit">
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <button onClick={handleGoogleSignIn}
            className="button signin__google">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg></span> Sign in with Google
          </button>

          <p className="noteWhenSignIn">
            By signing-in you agree to the SHOPPE Conditions of Use & Sale. Please
            see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
        </div>

        <div className="button" id="createAccount">
          <Divider>New to Shoppe?</Divider>

          <Link to='/registration'>
            <Button id="newAccount" name="newAcct">Create your Shoppe account</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Signin;



