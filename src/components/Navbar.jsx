
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Navbar = () => {
  const ctx = useContext(CartContext);
  // console.log(ctx)

  const userStore = useContext(UserContext)
  // console.log(userStore)
  let login = userStore.userData.login

  const [searchValue, setsearchValue] = useState('');
  const handleLogout = ()=>{
    setsearchValue('')
    userStore.setsearch('')
    localStorage.removeItem('userDetails')
    userStore.setuserData({login:false,email:''})
  }
  const handleSearch = (e) => {
    setsearchValue(e.target.value)
    userStore.setsearch(e.target.value.toLowerCase())
  }

  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top opacity-75">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <form className="d-flex ms-auto" role="search">
              <input value={searchValue} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontWeight: 'bold', gap: '10px', fontSize: '19px', fontFamily: '-moz-initial' }}>

              {login===true &&<li className="nav-item ">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>}
             {login===true && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>}
              {login===true &&<li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>}
             {login===false && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>}
             {login===false && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
              </li>}
             {login===true && <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">Cart🛒 <sup>{ctx.cartArr.length}</sup></Link>
              </li>}
             {login===true && <li  onClick={handleLogout} className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Logout</Link>
              </li>}
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
