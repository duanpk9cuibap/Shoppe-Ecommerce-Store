import React from 'react';
import './Home.scss';

import banner5 from '../../assets/banner5.jpg';
import ShoppeProduct from '../../components/ShoppeProduct';

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


