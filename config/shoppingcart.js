import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext({
  productLines: [],
  addProductLine: () => {}, 
  total: 0,
  quantity: 0
});

export const Cart = ({ children }) => {
  const [productLines, setProductLines] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0)

  const addProductLine = (product) => {
    setProductLines([...productLines, product]);
  }
  
  useEffect(() => {
    const total = productLines.reduce((prev, cur) => {
      return prev + cur.price
    }, 0);
    setTotal(total)
  }, [productLines]);


  useEffect(() => {
    const quantity = productLines.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0)
    setQuantity(quantity);
  }, [productLines]);


  return(

    <CartContext.Provider  value={{ productLines, addProductLine, total, quantity }}>
      {/* lägg till quantity om det ska vara med som props */}
      {children}
    </CartContext.Provider>

  )
};

export const CartConsumer = CartContext.Consumer;

export const useCart = () => {
  return useContext(CartContext);
} 