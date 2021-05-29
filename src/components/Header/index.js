import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

import Logo from '../../assets/Logo.png';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
})

function Header() {

  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignOut = () => {
    dispatch(signOutUserStart());
    history.goBack();
  }

  return (
    <div className="header">
      <Link to='/'>
        <img className="header__logo"
          src={Logo} alt="" />
      </Link>

      <div className="header__search">
        <form className="header__search__form">
          <input type="text" className="header__search__form__input" />
          <div className="header__search__form__right">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>


      <div className="header__nav">

        {!currentUser ? <Link to='/login' className="header__option">
          <span className="header__optionLineOne">
            Hello Guest!
          </span>
          <span className="header__optionLineTwo">
            Sign in
          </span>
        </Link>
          :
          <Link className="header__option" to='/signout'>
            <span className="header__optionLineOne">
              Hello
            </span>
            <span onClick={onSignOut}
              className="header__optionLineTwo">
              Sign out
          </span>
          </Link>
        }

        {!currentUser ? <Link className="header__option" to="/products">
          <span className="header__optionLineOne">
            Start
          </span>
          <span className="header__optionLineTwo">
            Selling on Shoppe
          </span>
        </Link>
          :
          <Link to="/products" className="header__option" >
            <span className="header__optionLineOne"> <StoreIcon /></span>
            <span className="header__optionLineTwo">
              Your Store
          </span>
          </Link>
        }

        <div className="header__option">
          <span className="header__optionLineOne">
            Returns
          </span>
          <span className="header__optionLineTwo">
            & Orders
          </span>
        </div>

        <Link to='/checkout' className="header__optionBasket">
          <span><ShoppingCartIcon /></span>
          <span className="header__optionLineTwo header__basketCount">
            {totalNumCartItems}
          </span>
        </Link>
      </div>
    </div >
  )
}


Header.defaultProps = {
  currentUser: null
}

export default Header;
