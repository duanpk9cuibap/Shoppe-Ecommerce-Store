import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Typography, Button, Divider } from 'antd';

import { signUpUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import styled from "styled-components";
import 'antd/dist/antd.css';

import Logo from '../../assets/Logo.png';

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

const { Title } = Typography;

const mapState = ({ user }) => ({
  userErr: user.userErr,
  currentUser: user.currentUser
})

const Signup = () => {

  const { userErr, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  useEffect(() => {
    try {

    }
    catch {

    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      history.push('/shoppe_app/');
    }
  }, [currentUser]);


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    const { displayName, email, password, confirmPassword } = values;
    dispatch(signUpUserStart({ displayName, email, password, confirmPassword }));
  };

  return (
    <Container>
      <div className="signup">
        <Link to='/shoppe_app/'>
          <img
            className="signup__logo"
            src={Logo} alt="" />
        </Link>

        <div className="signup__container">
          <h3>Create account</h3>

          <Form
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="displayName"
              label="Name:"
              rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email:"
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

            <Form.Item
              name="confirmPassword"
              label="Confirm Password:"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item >
              <Button type="text" htmlType="submit">
                Create your Shoppe account
              </Button>
            </Form.Item>
          </Form>
          <span>By creating an account, you agree to Shoppe's Conditions of Use and Privacy Notice.</span>
          <Divider dashed />
          <span>Already have an account?<Link to="/shoppe_app/login"> Sign in</Link></span>
        </div>
      </div>
    </Container>
  )
}

export default Signup;

