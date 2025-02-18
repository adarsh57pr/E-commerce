import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {


  let arr  =JSON.parse(localStorage.getItem('ecomSigunup')) || []
  let nameref = useRef()
  let emailref = useRef()
  let passwordref = useRef()
  let navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    let obj ={
      name:nameref.current.value,
      email:emailref.current.value,
      password:passwordref.current.value,
    }
    // console.log(obj)

    if(!obj.name){
     return toast.error("name is required",{position:"top-center"})
    }
    if(!obj.email){
     return toast.error("email is required",{position:"top-center"})
    }
    if(!obj.password){
     return toast.error("password is required",{position:"top-center"})
    }
    let checkUser = arr.find((item)=>item.email===obj.email);
    if(checkUser){
      toast.error('user already exists',{
       position:'top-center' 
      })
    }else{
      arr.push(obj)
      localStorage.setItem('ecomSigunup',JSON.stringify(arr))
      navigate('/login')
      toast.success("user registered successfull",{position:'top-center'})
    }
  }
  return (
    <div className='signupForm p-4 mt-4' style={{height:"100vh"}}>
   <form onSubmit={handleSubmit} className='col-6 m-auto px-5 py-3 mt-5 rounded' style={{backgroundImage:"url('https://i.pinimg.com/474x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg')",backgroundRepeat: "no-repeat" , backgroundSize: "cover"}}>
   <h3 className='text-center my-2'>Signup Form</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input ref={nameref} type="text" className="form-control" id="name" aria-describedby="emailHelp" />

 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailref} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
 
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordref} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button  type="submit" className="btn btn-primary">Submit</button>
  <p className='text-center my-2'>Already a user? <Link to={'/login'}>Login</Link></p>
</form>

    </div>
  )
}

export default Signup