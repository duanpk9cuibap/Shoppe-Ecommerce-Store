import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//pages
import Header from './components/Header';
import './defaults.scss';
import Home from './pages/Homepage/Home';
import Signin from './components/Signin';
import Signup from './components/signup';
import CreateProduct from './components/CRUDPRODUCTS/CreateProduct';
import ResetPassword from './components/ResetPassword';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import FetchYourOwnProducts from './components/CRUDPRODUCTS/FetchYourOwnProducts';
import EditYourProduct from './components/CRUDPRODUCTS/EditYourProduct';
import DeleteProduct from './components/CRUDPRODUCTS/DeleteProduct';
import Search from './pages/Search';


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Header />

          <Switch>
            <Route exact path='/'>
              <Home />
              <Footer />
            </Route>

            <Route exact path='/login'>
              <Signin />
              <Footer />
            </Route>

            <Route exact path='/registration'>
              <Signup />
              <Footer />
            </Route>

            <Route path='/products/new'
              render={() => <CreateProduct />} />

            <Route exact path='/products' render={() => <FetchYourOwnProducts />} />

            <Route path='/products/delete/:id' exact component={DeleteProduct} />

            <Route path="/products/edit/:id" exact component={EditYourProduct} />

            <Route path="/search" exact component={Search} />

            <Route exact path='/recovery'>
              <Home />
              <ResetPassword />
            </Route>

            <Route exact path='/checkout'>
              <Checkout />
              <br />
              <Footer />
            </Route>

          </Switch>

        </div>
      </ScrollToTop>
    </Router >
  );
}

export default App;
