import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products'


export const ShopContext = createContext(null) //creating context

const getDefaultCart =()=>{
    let cart={};
    for(let i = 1; i<PRODUCTS.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {  
const [cartItems, setCartItems] =useState(getDefaultCart()); //getDefaultCart set the value of useState.

const getTotalAmount = ()=>{
    let totalAmount = 0;
    console.log(totalAmount,"Total amomunt");
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price
        }
    }
    return totalAmount
}

const addToCart =(itemId)=>{
     setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}));
}
const removeFromCart =(itemId)=>{
     setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}));
}

const updateCartItemsCount = (newAmount, itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]: newAmount}))
}

const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemsCount , getTotalAmount}
console.log(cartItems);

return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
