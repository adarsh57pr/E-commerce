import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartState = (props) => {

  const [cartArr, setcartArr] = useState([]);
  // console.log(cartArr);

  function addToCart(ans) {
    let checkCartArr = cartArr.find((ele) => {
      return ele.id === ans.id;
    })
    if (checkCartArr) {
      toast.error("already added", { position: 'top-center' })
    }
    else {
      let updatedObj = { ...ans, quantity: 1 }
      // console.log(updatedObj)
      let copyArr = [...cartArr, updatedObj]
      //  copyArr.push()
      setcartArr(copyArr)
      toast.success("product added successfully", { position: 'top-center' })

    }


  }
  const deleteToCart = (ele, i) => {
    console.log(ele, i)
    let copyArr = [...cartArr]
    copyArr.splice(i, 1)
    setcartArr(copyArr)
    toast.warn(`${ele.title} delete succesfully!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }
  const handleIncrement = (ele, i) => {
    console.log(ele, i)
    let updatedObj = {
      ...ele,
      quantity: ele.quantity + 1,
      price: ele.price + (ele.price / ele.quantity)
    }
    console.log(updatedObj)
    let copyArr = [...cartArr]
    copyArr[i] = updatedObj
    setcartArr(copyArr)

  }

  const handleDecrement = (ele, i) => {
    console.log(ele, i)
    if (ele.quantity <= 1) {
      return
    } else {
      let updatedObj = {
        ...ele,
        quantity: ele.quantity - 1,
        price: ele.price - (ele.price / ele.quantity)
      }
      console.log(updatedObj)
      let copyArr = [...cartArr]
      copyArr[i] = updatedObj
      setcartArr(copyArr)

    }
  }

  return (
    <CartContext.Provider value={{ cartArr, setcartArr, addToCart, deleteToCart, handleIncrement, handleDecrement}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
