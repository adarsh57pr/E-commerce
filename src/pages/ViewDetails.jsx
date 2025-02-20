import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';

const ViewDetails = () => {
  let ctx = useContext(CartContext);
  // console.log(ctx)
  let Userctx = useContext(UserContext);
  let mode = Userctx.userData.mode
  console.log(mode)

  const location = useLocation();
  // console.log(location)
  let view = location.state;

  let star = '';
  let temp = Math.round(view.rating)
  for (let i = 1; i <= temp; i++) {
    star += '⭐'
  }


  return (
    <div style={{backgroundColor:mode===true ? 'white' : 'black'}}>
    <div className='container' style={{ marginTop: '40px' }}>
      <div className='row fw-medium pt-6 ps-4'>
        <div className='col-md-6 bg-info d-flex justify-evenly rounded '>
          <div className='col-md-6'><img src={location.state.thumbnail} alt="" /></div>
          <div className=' col-md-6 bg-white text-dark d-flex flex-column justify-content-center rounded my-4 py-2' style={{ textAlign: 'center' }}>
            <h4 className="card-title">{view.title}</h4>
            <p className="card-text"><b>Price : </b>{view.price} $ </p>
            <p className="card-text"><b>Discount : </b>{view.discountPercentage} % </p>
            <p className="card-text"><b>Brand : </b>{view.brand}</p>
            <p className="card-text"><b>Category : </b>{view.category}</p>
            <p className="card-text"><b>Rating : </b>{star}</p>
          </div>
        </div>
        <div className='col-md-6 text-lg-start px-5' style={{color:mode===true ? 'black' : 'white'}} >
          <p className="card-text"><b>Stock : </b>{view.stock}</p>
          <p className="card-text"><b>Return Policy : </b>{view.returnPolicy}</p>
          <p className="card-text"><b>Shiping Information : </b>{view.shippingInformation}</p>
          <p className="card-text"><b>Warranty : </b>{view.warrantyInformation}</p>
          <p className="card-text"><b>tages : </b>{view.tags.map((ele) => <span>{ele}  </span>)}</p>
          <p className="card-text"><b>AvailabilityStatus : </b>{view.availabilityStatus}</p>
          <p className="card-text"><b>Description : </b>{view.description}</p>


        </div>
        <div className='d-flex justify-content-between my-5'>
          <div className='col-md-6 ext-lg-start px-5 mt-4' >

            <button onClick={() => ctx.addToCart(view)} className='btn bg-warning ms-5'>Add to Cart</button>
            <Link to="/pay" className='btn bg-success ms-4 px-4'>Buy Now</Link>

          </div>
          <div className='col-md-6  text-lg-start px-5 mt-3 ' >
            <p className="card-text text-dark" ><b style={{color:mode===true ? 'black' : 'white'}}>Reviews : </b>{view.reviews.map((ele) => {
              let star2 = '';
              let temp2 = Math.round(ele.rating)
              for (let i = 1; i <= temp2; i++) {
                star2 += '⭐'
              }
              return <div className='d-flex mt-2 bg-info rounded text-black' style={{ marginLeft: '100px' }}>
                <img className='bg-info-subtle rounded p-1  mt-2 ms-2' style={{ height: '70px', width: '70px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" />
                <div className='ms-2 mt-2' style={{ lineHeight: '5px' }}>
                  <h4 className='text-light'>{ele.reviewerName}</h4>
                  <p>{ele.reviewerEmail}</p>
                  <p><b>Rating : </b>{star2}</p>
                </div>
              </div>
            })}</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default ViewDetails
