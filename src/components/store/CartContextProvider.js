import { useState } from "react";
import cartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

  const addItemHandler = (item) => {
    setItem((PrevValue) => {
      return [...PrevValue,item]
    })
  };

  const addToCartHandler = (item)=>{
    // console.log(item)
    // console.log(cartObj.items)
    // const updatedItems = cartObj.items.map((itm) => {
    //   if(item.tShirtName === itm.tShirtName){
    //     console.log(item.tShirtQuantityL-itm)
    //     console.log(itm.tShirtQuantityL)
    //     return item
    //   }
    // })
    // console.log(updatedItems)
    setCart((PrevValue)=>{
      return [...PrevValue, item]
    })
  }
  const cartObj = {
    items: item,
    addItems: addItemHandler,
    cart:cart,
    addToCart:addToCartHandler,
  };

  console.log(cartObj.items)
  console.log(cartObj.cart)
  

  return (
    <cartContext.Provider value={cartObj}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
