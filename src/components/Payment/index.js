import React from 'react';

import './styles.scss';

function Payment() {
  return (
    <div className="payment">
      <div className="container">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" novalidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                <div className="invalid-feedback"> Valid first name is required. </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                <div className="invalid-feedback"> Valid last name is required. </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                <div className="invalid-feedback" style={{ width: "100%" }}> Your username is required. </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="email">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
            </div>
            <div className="mb-3">
              <label for="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
              <div className="invalid-feedback"> Please enter your shipping address. </div>
            </div>
            <div className="mb-3">
              <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Country</label>
                <select className="custom-select d-block w-100" id="country" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback"> Please select a valid country. </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">State</label>
                <select className="custom-select d-block w-100" id="state" required="">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback"> Please provide a valid state. </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                <div className="invalid-feedback"> Zip code required. </div>
              </div>
            </div>
            <hr className="mb-4" />
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="same-address" />
              <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="save-info" />
              <label className="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" for="credit">Credit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" for="debit">Debit card</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                <label className="custom-control-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="cc-name">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                <small className="text-muted">Full name as displayed on card</small>
                <div className="invalid-feedback"> Name on card is required </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                <div className="invalid-feedback"> Credit card number is required </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="cc-expiration">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                <div className="invalid-feedback"> Expiration date required </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                <div className="invalid-feedback"> Security code required </div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn-checkout" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment;


{/* <div className="container">

<div className="col-md-8 order-md-1">
  <h4 class="mb-3">Billing address</h4>
  <form class="needs-validation" novalidate="">
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First name</label>
        <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
        <div class="invalid-feedback"> Valid first name is required. </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last name</label>
        <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
        <div class="invalid-feedback"> Valid last name is required. </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="username">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">@</span>
        </div>
        <input type="text" class="form-control" id="username" placeholder="Username" required="" />
        <div class="invalid-feedback" style="width: 100%;"> Your username is required. </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="email">Email <span class="text-muted">(Optional)</span></label>
      <input type="email" class="form-control" id="email" placeholder="you@example.com" />
      <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
    </div>
    <div class="mb-3">
      <label for="address">Address</label>
      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
      <div class="invalid-feedback"> Please enter your shipping address. </div>
    </div>
    <div class="mb-3">
      <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
    </div>
    <div class="row">
      <div class="col-md-5 mb-3">
        <label for="country">Country</label>
        <select class="custom-select d-block w-100" id="country" required="">
          <option value="">Choose...</option>
          <option>United States</option>
        </select>
        <div class="invalid-feedback"> Please select a valid country. </div>
      </div>
      <div class="col-md-4 mb-3">
        <label for="state">State</label>
        <select class="custom-select d-block w-100" id="state" required="">
          <option value="">Choose...</option>
          <option>California</option>
        </select>
        <div class="invalid-feedback"> Please provide a valid state. </div>
      </div>
      <div class="col-md-3 mb-3">
        <label for="zip">Zip</label>
        <input type="text" class="form-control" id="zip" placeholder="" required="" />
        <div class="invalid-feedback"> Zip code required. </div>
      </div>
    </div>
    <hr class="mb-4" />
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="same-address" />
      <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="save-info" />
      <label class="custom-control-label" for="save-info">Save this information for next time</label>
    </div>
    <hr class="mb-4" />
    <h4 class="mb-3">Payment</h4>
    <div class="d-block my-3">
      <div class="custom-control custom-radio">
        <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" />
        <label class="custom-control-label" for="credit">Credit card</label>
      </div>
      <div class="custom-control custom-radio">
        <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
        <label class="custom-control-label" for="debit">Debit card</label>
      </div>
      <div class="custom-control custom-radio">
        <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" />
        <label class="custom-control-label" for="paypal">PayPal</label>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="cc-name">Name on card</label>
        <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
        <small class="text-muted">Full name as displayed on card</small>
        <div class="invalid-feedback"> Name on card is required </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="cc-number">Credit card number</label>
        <input type="text" class="form-control" id="cc-number" placeholder="" required="" />
        <div class="invalid-feedback"> Credit card number is required </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 mb-3">
        <label for="cc-expiration">Expiration</label>
        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
        <div class="invalid-feedback"> Expiration date required </div>
      </div>
      <div class="col-md-3 mb-3">
        <label for="cc-cvv">CVV</label>
        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
        <div class="invalid-feedback"> Security code required </div>
      </div>
    </div>
    <hr class="mb-4" />
    <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
  </form>
</div>
</div>
 */}

{/* <div className="col-10 col-sm-8 col-md-7 col-lg-6">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" for="gridCheck">
              Check me out
      </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div> */}