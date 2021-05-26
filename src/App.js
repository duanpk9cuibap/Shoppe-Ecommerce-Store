import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//pages
import Header from './components/Header';
import './defaults.scss';
import Home from './pages/Homepage/Home';
import Signin from './components/Signin';
import Signup from './components/signup';
import CreateProduct from './components/ProductForm/CreateProduct';
import ResetPassword from './components/ResetPassword';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import FetchYourOwnProducts from './components/ProductForm/FetchYourOwnProducts';


const App = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'
            render={() => <Signin />} />

          <Route path='/registration'
            render={() => <Signup />}>
          </Route>

          <Route path='/product/new'
            render={() => <CreateProduct />} />

          <Route exact path='/products' render={() => <FetchYourOwnProducts />} />

          <Route path='/recovery'
            render={() => <ResetPassword />} />

          <Route path='/checkout'
            render={() => <Checkout />} />

        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
