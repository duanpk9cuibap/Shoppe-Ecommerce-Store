import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signUpUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import Logo from '../../assets/Logo.png';

const mapState = ({ user }) => ({
  userErr: user.userErr,
  currentUser: user.currentUser
})

const Signup = () => {

  const { userErr, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  useEffect(() => {
    if (currentUser) {
      history.push('/');
    }
  }, [currentUser])

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signUpUserStart({ displayName, email, password, confirmPassword }))
  }

  return (
    <div className="signup">
      <Link to='/'>
        <img
          className="signup__logo"
          src={Logo} alt="" />
      </Link>

      <div className="signup__container">
        <h3>Create account</h3>

        <div className="error__password">{errors.length > 0 ? <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>
          })}
        </ul>
          :
          ""
        }</div>


        <form onSubmit={handleFormSubmit} >
          <label htmlFor="yourName">
            <strong>Your name</strong>
          </label>
          <input
            id="yourName"
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)} />

          <label htmlFor="email">
            <strong>E-mail</strong>
          </label>
          <input id="email"
            type='email' value={email} onChange={e => setEmail(e.target.value)} />

          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            id="password"
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">
            <strong>Confirm Password</strong>
          </label>
          <input
            id="confirmPassword"
            type='password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type='submit'
            className="button signup__button">
            Create your Shoppe account</button>
        </form>

        <p className="noteWhenSignUp">
          By creating an account, you agree to the SHOPPE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

        <div>Already have an account? <a href="/login">Sign in</a></div>
      </div>

    </div >
  )
}

export default Signup;
