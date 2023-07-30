import React,{useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'

const CartItem = (props) => {
    const {cartItems,addToCart,removeFromCart,updateCartItemsCount} = useContext(ShopContext)
    const {id, productName, price, productImage} = props.data
  return (
    <div className='cartItem'>
      <img src={productImage} alt='Wishlist-Img'/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItemsCount(Number(e.target.value), id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
