import React from 'react';
import './Home.scss';
import Product from '../../components/Product';
import Directory from '../../components/Directory';

import banner5 from '../../assets/banner5.jpg';
import ShoppeProduct from '../../components/ShoppeProduct';
import Pagination from '../../components/Pagination';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="img-fluid home__image"
          src={banner5} alt="" />
        <ShoppeProduct />
      </div>
    </div>
  )
}

export default Home;


