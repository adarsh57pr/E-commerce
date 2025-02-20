import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CartContext from '../context/CartContext';
import PNF from './PNF';
import UserContext from '../context/UserContext';

const Home = () => {

  const ctx = useContext(CartContext);
  // console.log(ctx)

  let searchCtx = useContext(UserContext)
  let searchValue = searchCtx.search
  let mode = searchCtx.userData.mode
  console.log(mode)
  // console.log(searchValue)

  const [products, setproducts] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  let itemperPage = 16;
  let lastIndex = itemperPage * currentPage;
  let firstIndex = lastIndex - itemperPage;

  let filteredProducts = products.filter((ele) => ele.title.toLowerCase().includes(searchValue) || ele.category.toLowerCase().includes(searchValue));
  // console.log(filteredProducts)

  let slicedArr = filteredProducts.slice(firstIndex, lastIndex);
  // console.log(slicedArr.length);

  let NoOfButtons = Math.ceil(filteredProducts.length / itemperPage);
  // console.log(NoOfButtons);
  let btnArr = new Array(NoOfButtons).fill(0);
  // console.log(btnArr);

  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage <= btnArr.length - 1) {
      setcurrentPage(currentPage + 1)
    }
  }

  const [error, seterror] = useState(false);
  const [loding, setloding] = useState(false);

  const getAllData = async () => {
    setloding(true)
    try {
      let res = await axios.get('https://dummyjson.com/products/?limit=0&skip=0')
      // console.log(res.data.products);
      setproducts(res.data.products)
      setloding(false)
    } catch (error) {
      // console.log(error)
      seterror(true)
    }
  }
  useEffect(() => {
    getAllData()
  }, [])

  return (
    <div style={{backgroundColor:mode===true? 'white' : 'black'}}>
      {loding ? (
        <div className="row m-0 p-0 p-3 justify-content-center gap-3">
          {Array(6).fill(0).map(() => {
            return <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <div className="col-md-3 mb-4">
                <Skeleton height={500} />
                <div className="d-flex justify-content-between">
                  <Skeleton width={150} />
                  <Skeleton width={150} />
                </div>
              </div>
            </SkeletonTheme>
          })}
        </div>
      ) : (<div className='' style={{ marginTop: '40px' }}>
        {error === false ? <div className='row m-0 p-0 justify-content-center pt-3 px-4  gap-3'>

          {slicedArr.map((ele) => {
            return ele.thumbnail && <div className="card bg-info" style={{ width: '18rem',height:'' }}>
              <img src={ele.thumbnail} className="card-img-top" alt="..." />
              <div className="card-body d-flex row justify-content-between rounded bg-info-subtle  " style={{}}>
                <h5 className="card-title">{ele.title}</h5>
                <p className="card-text">Price :{ele.price} $ </p>
                <p className="card-text">Brand :{ele.brand}</p>

                {/* <p className="card-text">Category : {ele.category}</p> */}
                <div className=''>
                  <Link to="/viewdetails" state={ele} className="btn btn-primary" >View Details</Link>
                  <button onClick={() => ctx.addToCart(ele)} className='btn btn-success mx-1'>Add to Cart</button>
                </div>
              </div>
            </div>

          })}

        </div> : <PNF />}
        <div className='mt-6 pb-4 '>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center flex-wrap">
              <li onClick={handlePrev} className="page-item disabled">
                <Link to='#' className="page-link">Previous</Link>
              </li>
              {
                btnArr.map((item, key) => {
                  return <li onClick={() => setcurrentPage(key + 1)} className={currentPage === key + 1 ? "page-item active" : "page-item"}>
                    <Link className="page-link" to="#">{key + 1}</Link></li>
                })
              }

              <li onClick={handleNext} className="page-item">
                <Link className="page-link" to="#">Next</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>)}
    </div>
  )
}

export default Home
