
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
  let mode = userStore.userData.mode
  console.log(mode)

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
  // const [Mode , setMode] = useState(false)
 const handleMode = (e)=>{
  userStore.setuserData({...userStore.userData,mode:!mode})
 }



  return (
    <div style={{backgroundColor:mode===true ? 'white':'black'}}>
      <nav className="navbar navbar-expand-lg bg-info fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">

            <form className="d-flex ms-auto w-25 " role="search">
              <input value={searchValue} onChange={handleSearch} className="form-control  " type="search" placeholder="Search.." aria-label="Search" /> 
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
                <Link className="nav-link active" aria-current="page" to="/cart">Cart <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className="cursor-pointer fill-[#333] inline"
                    viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                  </svg> <sup>{ctx.cartArr.length}</sup></Link>
              </li>}
             {login===true && <li className="nav-item">
                {mode===true?<button onClick={handleMode} className="nav-link active" aria-current="page" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24" id="Dark-Mode--Streamline-Material-Pro">
  <g id="Dark-Mode--Streamline-Material-Pro">
    <path id="dark-mode_2" fill="#000" d="M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.2333 3 12.4625 3.00833 12.6875 3.025C12.9125 3.04167 13.1333 3.06667 13.35 3.1C12.6667 3.58333 12.1208 4.2125 11.7125 4.9875C11.3042 5.7625 11.1 6.6 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.4167 12.9 18.2583 12.6958 19.025 12.2875C19.7917 11.8792 20.4167 11.3333 20.9 10.65C20.9333 10.8667 20.9583 11.0875 20.975 11.3125C20.9917 11.5375 21 11.7667 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21ZM12 19C13.4667 19 14.7833 18.5958 15.95 17.7875C17.1167 16.9792 17.9667 15.925 18.5 14.625C18.1667 14.7083 17.8333 14.775 17.5 14.825C17.1667 14.875 16.8333 14.9 16.5 14.9C14.45 14.9 12.7042 14.1792 11.2625 12.7375C9.82083 11.2958 9.1 9.55 9.1 7.5C9.1 7.16667 9.125 6.83333 9.175 6.5C9.225 6.16667 9.29167 5.83333 9.375 5.5C8.075 6.03333 7.02083 6.88333 6.2125 8.05C5.40417 9.21667 5 10.5333 5 12C5 13.9333 5.68333 15.5833 7.05 16.95C8.41667 18.3167 10.0667 19 12 19Z" stroke-width="1"></path>
  </g>
</svg></button>
               : <button onClick={handleMode} className="nav-link active" aria-current="page" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Brightness--Streamline-Ultimate" height="24" width="24"><desc>Brightness Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.50098 12c0 1.1935 0.4741 2.3381 1.31802 3.182 0.84391 0.8439 1.9885 1.318 3.182 1.318s2.338 -0.4741 3.182 -1.318c0.8439 -0.8439 1.318 -1.9885 1.318 -3.182 0 -0.5909 -0.1164 -1.1761 -0.3426 -1.7221 -0.2261 -0.54594 -0.5576 -1.04202 -0.9754 -1.45988 -0.4179 -0.41786 -0.914 -0.74933 -1.4599 -0.97548C13.1771 7.6164 12.5919 7.5 12.001 7.5c-0.591 0 -1.1761 0.1164 -1.7221 0.34254 -0.54596 0.22615 -1.04204 0.55762 -1.4599 0.97548 -0.41787 0.41786 -0.74934 0.91394 -0.97548 1.45988 -0.22615 0.546 -0.34254 1.1312 -0.34254 1.7221Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.001 1.5v3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.001 19.5v3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M22.501 12h-3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.50098 12h-3" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m19.425 4.57605 -2.121 2.121" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m6.69699 17.304 -2.121 2.121" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m19.425 19.425 -2.121 -2.121" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m6.69699 6.69705 -2.121 -2.121" stroke-width="1.5"></path></svg></button>}
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
