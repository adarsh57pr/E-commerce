import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const ctx = useContext(CartContext);
  // console.log(ctx)

  let sum = 0;
  ctx.cartArr.forEach((ele) => {
    sum += ele.price;
  })


  // let handleDelete = (obj, i) => {
  //   console.log(obj, i)

  //   let copyArr = [...props.cartArr]
  //   copyArr.splice(i, 1)
  //   props.setcartArr(copyArr)
  // }

  // let sum = 0;
  // // for( let i=0; i<props.cartArr.lenght;i++){
  // //   sum=sum+props.cartArr[i].price
  // //   console.log(sum)
  // // } 
  // // OR---
  // props.cartArr.forEach((ele) => {
  //   sum = sum + ele.price
  // })

  // const handleIncrement = (obj, i) => {
  //   console.log(obj, i)

  //   let updatedObj = {
  //     ...obj,
  //     quantity: obj.quantity + 1,
  //     price: obj.price + (obj.price / obj.quantity)
  //   }
  //   console.log(updatedObj)

  //   let copyArr = [...props.cartArr]
  //   copyArr[i] = updatedObj
  //   props.setcartArr(copyArr)

  // }
  // const handleDecrement = (obj, i) => {
  //   console.log(obj, i)

  //   let updatedObj = {
  //     ...obj,
  //     quantity: obj.quantity - 1,
  //     price: obj.price - (obj.price / obj.quantity)
  //   }

  //   if (updatedObj.quantity < 1) {
  //     handleDelete(obj, i)
  //     return
  //   }

  //   console.log(updatedObj)

  //   let copyArr = [...props.cartArr]
  //   copyArr[i] = updatedObj
  //   props.setcartArr(copyArr)

  // }


  return (
    <div style={{ marginTop: '70px' }}>
      <table className="table table-dark aline-middle text-center">
        <thead>
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Products</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>

        {
          ctx.cartArr.map((ele, index) => {
            return <tr>
              <th scope="row">{index + 1}</th>
              <td><img className='bg-black' src={ele.thumbnail} alt="" height={'150px'} width={'150px'} /></td>
              <td>{ele.title}</td>
              <td>{Math.ceil(ele.price)} $</td>
              <td>
                <button onClick={() => ctx.handleDecrement(ele, index)} className='btn btn-bg-dark p-2 mx-2'>-</button>
                {ele.quantity}
                <button onClick={() => ctx.handleIncrement(ele, index)} className='btn btn-bg-dark mx-2'>+</button>
              </td>
              <td><button onClick={() => ctx.deleteToCart(ele, index)} className='btn btn-danger'>delete</button></td>

            </tr>
          })
        }

      </table>
      <h5 className='text-center my-2'>Total Price = {Math.ceil(sum)} $</h5>

    </div>
  )
}

export default Cart

