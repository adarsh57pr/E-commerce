import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartState = (props) => {

    const [cartArr, setcartArr] = useState([]);
    console.log(cartArr);

    function addToCart(ans){
      let checkCartArr = cartArr.find((ele)=>{
        return ele.id === ans.id;
      })
      if(checkCartArr){
        toast.error("already added",{position:'top-center'})
      }
      else{
        let updatedObj = {...ans,quantity:1}
       console.log(updatedObj)
       let copyArr = [...cartArr, updatedObj]
      //  copyArr.push()
       setcartArr(copyArr)
        toast.success("product added successfully",{position:'top-center'})
        
      }
      
       
    }
    function deleteToCart(){

    }
    

  return (
    <CartContext.Provider value={{cartArr, setcartArr,addToCart,deleteToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
