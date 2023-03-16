import { useEffect, useState } from "react";
import cartContext from "./cart-context";

const CartContextProvider = (props) => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const asyncFun = async () => {
      let response = await fetch(
        `https://crudcrud.com/api/0efa045cc3044261beb159d1085fbb0f/cart`
      );
      let data = await response.json();
      setItem([...data]);
    };
    asyncFun();
  }, []);
  
  useEffect(() => {
    const asyncFun = async () => {
      let response = await fetch(
        `https://crudcrud.com/api/0efa045cc3044261beb159d1085fbb0f/Carts`
      );
      let data = await response.json();
      setCart([...data]);
    };
    asyncFun();
  }, []);

  const addItemHandler = async (item) => {
    let response = await fetch(
      `https://crudcrud.com/api/0efa045cc3044261beb159d1085fbb0f/cart`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setItem((prevValue) => {
      return [...prevValue, data];
    });
  };

  const addToCartHandler = async (item) => {
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
    let response = await fetch(
      `https://crudcrud.com/api/0efa045cc3044261beb159d1085fbb0f/Carts`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setCart((prevValue) => {
      return [...prevValue, data];
    });
  };
  const cartObj = {
    items: item,
    addItems: addItemHandler,
    cart: cart,
    addToCart: addToCartHandler,
  };

  console.log(cartObj.items);
  console.log(cartObj.cart);

  return (
    <cartContext.Provider value={cartObj}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
