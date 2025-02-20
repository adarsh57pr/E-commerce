import React from 'react'

const Pay = () => {
  return (
    <div className='container' style={{ marginTop: '70px' }}>
     <div className="container-fluid d-flex align-items-center justify-content-center vh-100 py-4">
  <div className="bg-light p-4 w-100 w-md-75 w-lg-50 mx-auto rounded">
    <h2 className="h3 font-weight-bold text-dark text-center">Checkout</h2>
    <div className="row mt-4">
      <div className="col-lg-8">
        <h3 className="h5 font-weight-bold text-dark">Choose your payment method</h3>
        <div className="row mt-4">
          <div className="col-6 d-flex align-items-center">
            <input type="radio" className="form-check-input" id="card" defaultChecked />
            <label htmlFor="card" className="ml-3 d-flex gap-2 cursor-pointer">
              <img src="https://readymadeui.com/images/visa.webp" className="w-25" alt="card1" />
              <img src="https://readymadeui.com/images/american-express.webp" className="w-25" alt="card2" />
              <img src="https://readymadeui.com/images/master.webp" className="w-25" alt="card3" />
            </label>
          </div>
          <div className="col-6 d-flex align-items-center">
            <input type="radio" className="form-check-input" id="paypal" />
            <label htmlFor="paypal" className="ml-3 d-flex gap-2 cursor-pointer">
              <img src="https://readymadeui.com/images/paypal.webp" className="w-25" alt="paypalCard" />
            </label>
          </div>
        </div>
        <form className="mt-4">
          <div className="row mb-3">
            <div className="col-sm-6">
              <input type="text" placeholder="Name of card holder" className="form-control" />
            </div>
            <div className="col-sm-6">
              <input type="number" placeholder="Postal code" className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <input type="number" placeholder="Card number" className="form-control" />
          </div>
          <div className="row mb-3">
            <div className="col-sm-6">
              <input type="number" placeholder="EXP." className="form-control" />
            </div>
            <div className="col-sm-6">
              <input type="number" placeholder="CVV" className="form-control" />
            </div>
          </div>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <button type="button" className="btn btn-outline-secondary">Pay later</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div className="col-lg-4 bg-white p-4 rounded mt-4 mt-lg-0">
        <h3 className="h5 font-weight-bold text-dark">Summary</h3>
        <ul className="text-dark mt-3">
          <li className="d-flex justify-content-between small">Sub total <span className="font-weight-bold">$48.00</span></li>
          <li className="d-flex justify-content-between small">Discount (20%) <span className="font-weight-bold">$4.00</span></li>
          <li className="d-flex justify-content-between small">Tax <span className="font-weight-bold">$4.00</span></li>
          <hr />
          <li className="d-flex justify-content-between font-weight-bold">Total <span>$52.00</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Pay
