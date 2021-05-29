import React from 'react';
import './Home.scss';
import Product from '../../components/Product';
import Directory from '../../components/Directory';

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


{/* <Product
          title="Xiaomi Mi 10T - Smartphone, 6 GB + 128 GB, Dual Sim, Alexa Hands-Free, Grigio (Lunar Silver)"
          id="3"
          price={1459.95}
          image="https://th-live-01.slatic.net/p/e0b5a35efeb4c8aee96fa6e48bc7ed85.jpg_2200x2200q80.jpg_.webp"
          rating={4}
        />
        <Product
          title="SportDOG Brand Rechargeable In-Ground Fence Add-A-Dog Collar - Waterproof with Tone/Vibration and Static - SDF-CR,Black"
          id="4"
          price={59.95}
          image="https://images-na.ssl-images-amazon.com/images/I/61qIATsPF5S._AC_SY355_.jpg"
          rating={3}
        />
        <Product
          title="Bose Companion 2 Series III Multimedia Speakers - for PC (with 3.5mm AUX & PC Input) Black"
          id="5"
          price={99.95}
          image="https://images-na.ssl-images-amazon.com/images/I/71MHjYa1-pL._AC_SL1500_.jpg"
          rating={4}
        />

      </div>
      <div className="home__row">
        <Product
          title="Hanes Men's ComfortSoft Short Sleeve T-Shirt"
          id="6"
          price={35.95}
          image="https://ichiase.net/wp-content/uploads/2019/09/t-shirt-la-gi.jpg"
          rating={5}
        /> 
      <Product
          title="The lean startup"
          id="1"
          price={29.99}
          image="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
          rating={5}
        />
        <Product
          title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
          id="2"
          price={1459.95}
          image="https://ben.com.vn/Content/Images/Products/macbook-pro-silver-m1-2020.jpeg"
          rating={5}
        />*/}