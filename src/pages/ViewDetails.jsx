import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {
  const location = useLocation();
  console.log(location)
  let view = location.state;

  let star = '';
  let temp = Math.round(view.rating)
  for (let i = 1; i <= temp; i++) {
    star += '⭐'
  }


  return (
    <div className='container' style={{ marginTop: '70px' }}>
      <div className='row fw-medium'>
        <div className='col-md-6 bg-info d-flex rounded'><img src={location.state.thumbnail} alt="" />
          <div className=' col-md-6 bg-white text-dark d-flex flex-column justify-content-center rounded my-4 py-2' style={{ textAlign: 'center' }}>
            <h4 className="card-title">{view.title}</h4>
            <p className="card-text"><b>Price : </b>{view.price} $ </p>
            <p className="card-text"><b>Discount : </b>{view.discountPercentage} % </p>
            <p className="card-text mt-2"><b>Brand : </b>{view.brand}</p>
            <p className="card-text"><b>Category : </b>{view.category}</p>
            <p className="card-text"><b>Rating : </b>{star}</p>

          </div>
        </div>
        <div className='col-md-6 text-lg-start px-5' >
          <p className="card-text"><b>Stock : </b>{view.stock}</p>
          <p className="card-text"><b>Return Policy : </b>{view.returnPolicy}</p>
          <p className="card-text"><b>Shiping Information : </b>{view.shippingInformation}</p>
          <p className="card-text"><b>Warranty : </b>{view.warrantyInformation}</p>
          <p className="card-text"><b>tages : </b>{view.tags.map((ele) => <span>{ele}  </span>)}</p>
          <p className="card-text"><b>AvailabilityStatus : </b>{view.availabilityStatus}</p>
          <p className="card-text"><b>Description : </b>{view.description}</p>


        </div>
        <div className='d-flex justify-content-between mt-2'>
          <div className='col-md-6t ext-lg-start px-5 mt-4' >

            <button className='btn bg-warning ms-5'>Add to Cart</button>
            <button className='btn bg-success ms-2 px-4'>Buy Now</button>

          </div>
          <div className='col-md-6  text-lg-start px-5'>
            <p className="card-text"><b>Reviews : </b>{view.reviews.map((ele) => {
              let star2 = '';
              let temp2 = Math.round(ele.rating)
              for (let i = 1; i <= temp2; i++) {
                star2 += '⭐'
              }
              return <div className='d-flex mt-2 bg-info rounded text-black mt-0' style={{ marginLeft: '100px' }}>
                <img className='bg-info-subtle rounded  mt-2 ms-2' style={{ height: '70px', width: '70px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" alt="" />
                <div className='ms-4 mt-2' style={{ lineHeight: '5px' }}>
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
  )
}

export default ViewDetails
