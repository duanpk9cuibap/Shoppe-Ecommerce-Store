import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

import Logo from '../../assets/Logo.png';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import { searchProduct } from '../../redux/Search/search.action';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
})

function Header() {

  const { currentUser, totalNumCartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  const onSignOut = () => {
    dispatch(signOutUserStart());
    history.push('/shoppe_app/');
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProduct(searchTerm));
    history.push('/shoppe_app/search');
  }

  return (
    <div className="header">
      <div className="header__logo">
        <Link to='/shoppe_app/'>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="header__search">
        <form onSubmit={onSearchSubmit} value={searchTerm} className="header__search__form">
          <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="header__search__form__input" />
          <div className="header__search__form__right">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>


      <div className="header__nav">

        {!currentUser ? <Link to='/shoppe_app/login' className="header__option">
          <span className="header__optionLineOne">
            Hello Guest!
          </span>
          <span className="header__optionLineTwo">
            Sign in
          </span>
        </Link>
          :
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello
            </span>
            <span onClick={onSignOut}
              className="header__optionLineTwo">
              Sign out
            </span>
          </div>
        }

        {!currentUser ? <Link className="header__option" to="/shoppe_app/products">
          <span className="header__optionLineOne">
            Start
          </span>
          <span className="header__optionLineTwo">
            Selling on Shoppe
          </span>
        </Link>
          :
          <Link to="/shoppe_app/products" id="yourStore" className="header__option" >
            <span id="storeIcon" className="header__optionLineOne"> <StoreIcon /></span>
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

        <Link to='/shoppe_app/checkout' className="header__optionBasket">
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
