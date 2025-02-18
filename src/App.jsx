
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PNF from './pages/PNF'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import ViewDetails from './pages/ViewDetails'
import { useContext} from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/UserContext'
import Pay from './pages/Pay'
import Footer from './components/Footer'

const App = () => {

  let ctx = useContext(UserContext)
  // console.log(ctx)
  let login = ctx.userData.login;
  // console.log(login);


  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={login === true ? <Home /> : <Navigate to='/login' />}/>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={login === false ? <Login /> : <Navigate to='/' />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/viewdetails' element={<ViewDetails />}/>
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/*' element={<PNF />}/>
        </Routes>
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
