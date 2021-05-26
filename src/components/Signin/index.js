import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import Logo from '../../assets/Logo.png';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Signin = () => {

  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (currentUser) {
      resetForm();
      history.push('/');
    }
  }, [currentUser])

  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }

  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  return (
    <div className="signin">
      <Link to='/'>
        <img
          className="signin__logo"
          src={Logo} alt="" />
      </Link>

      <div className="signin__container">
        <h3>Sign-In</h3>

        <form onSubmit={onFormSubmit}>
          <label htmlFor="email">
            <strong>E-mail</strong>
          </label>
          <input id="email" type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)} />

          <label>
            <strong>Password</strong>
            <span id="password">
              <Link to='/recovery'>Forgot your password?</Link>
            </span>
          </label>

          <input type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />

          <br />
          <button
            type='submit'
            className="button signin__button">Sign In</button>
        </form>

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
        <h6><span>New to Shoppe?</span></h6>
        <Link to='/registration'>
          <button id="newAccount" name="newAcct">Create your Shoppe account</button>
        </Link>
      </div>
    </div>
  )
}

export default Signin;



