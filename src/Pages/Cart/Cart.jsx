import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './CartItem'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,getTotalAmount} = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id]!==0) {
            return <CartItem  data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ? (<div className='checkout'>
        <p>Total Amount: $ {totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      ):(
        <div className='checkoutPage'>
        <h1 className='my-h1'>Your Cart is Empty !</h1>
        </div>
      )}
    </div>
  )
}

export default Cart
