import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions';
import Logo from '../../assets/Logo.png';
import './styles.scss';

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr
})

function ResetPassword() {

  const dispatch = useDispatch();
  const history = useHistory();
  const { resetPasswordSuccess, userErr } = useSelector(mapState);

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(
        resetUserState()
      )
      history.push('/login');
    }
  }, [resetPasswordSuccess])

  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr])

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  }

  return (
    <div className='resetpassword'>
      <Link to='/'>
        <img
          className="resetpassword__logo"
          src={Logo} alt="" />
      </Link>

      <div className="resetpassword__container">
        <h3>Password assistance</h3>
        <form onSubmit={onFormSubmit}>

          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            id="email"
            onChange={e => setEmail(e.target.value)}
            type="email" />
          <br />
          {errors ? errors : ""}
          <button
            type="submit"
            className="resetpassword__button">Continue</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword;
