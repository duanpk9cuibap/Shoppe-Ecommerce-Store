import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 about">
            <h6>About</h6>
            <p className="text-justify">Shoppe.com <i>SHOPPE </i> As our name says, at Shoppe we are passionate about pets. We are a small company of 30 people who love animals.
I myself have two dogs and two cats at home! I love them more than anything – and we know that the customers who will purchase our products love their pets in the same way.</p>
          </div>

          <div className="col-xs-6 col-md-3 policies">
            <h6>Our Policies</h6>
            <ul className="footer-links">
              <li><a href="/">T.O.S</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Shipping info</a></li>
              <li><a href="/">Return & Refund</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3 domain">
            <h6>SHOPPE.COM</h6>
            <ul className="footer-links">
              <p>1968 S. Coast Hwy, Suite 5678, Laguna Beach CA 92651, United States</p>
            </ul>
            <br />
            <div>Support@shoppe.com</div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by duanDepTrai
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

