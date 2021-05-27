import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext({
  productLines: [],
  addProductLine: () => {}, 
  total: 0,
});

export const Cart = ({ children }) => {
  const [productLines, setProductLines] = useState([]);
  const [total, setTotal] = useState(0);

  const addProductLine = (product) => {
    setProductLines([...productLines, product]);
  }
  
  useEffect(() => {
    const total = productLines.reduce((prev, cur) => {
      return prev + cur.price
    }, 0);
    setTotal(total)
  }, [productLines]);


  return(

    <CartContext.Provider  value={{ productLines, addProductLine, total}}>
      {children}
    </CartContext.Provider>

  )
};

export const CartConsumer = CartContext.Consumer;

export const useCart = () => {
  return useContext(CartContext);
} 