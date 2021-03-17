import firebaseInstance from '../config/firebase';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { 
  PrepOrder,
  PrepContainer,
  CompleteBtn,
  CartPageMain
} from '../components/CartPage/index';

export default function OrderList() {
  const [newOrders, setNewOrders] = useState([])
  const [complete, setComplete] = useState()
  
  const orderCollection = firebaseInstance.firestore().collection('orders')
  
  const fetchOrders = (orderCollection) => {
    orderCollection.onSnapshot((querySnapshot) => {
      const order = [];
      querySnapshot.forEach((doc) => {
        order.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setNewOrders(order)
    })
    }

  useEffect(() => {
    try {
      fetchOrders(orderCollection)
    } catch (error) {
      console.log(error)
    }
  }, [newOrders])

  const RenderIncompleteOrders = () => {
    let incompleteOrders = [...newOrders.filter((order) => order.complete === false)]
    return incompleteOrders.map((item) => {
        return (
          <PrepContainer key={Math.random() * 1000}>
              <h3>Order Nummer: någon slags funktion</h3>
            <PrepOrder>
            {item.order.map(productLine => {
              return (
              <div key={productLine.id}>
                <h3>{productLine.title}</h3>
              </div>
            )
          })}
          </PrepOrder>
        </PrepContainer>
        )
    })
  }

  const RenderCompleteOrders = () => {
    let completeOrders = [...newOrders.filter((order) => order.complete === true)]
    return completeOrders.map((item) => {
        return (
          <PrepContainer key={Math.random() * 1000}>
              <h3>Order Nummer: någon slags funktion</h3>
            <PrepOrder>
            {item.order.map(productLine => {
              return (
              <div key={productLine.id}>
                <h3>{productLine.title}</h3>
              </div>
            )
          })}
          </PrepOrder>
        </PrepContainer>
        )
    })
  }


return(
  <CartPageMain style={{marginTop: '10%'}}>
    <section style={{background: '#fff3'}}>
    <h2>Beställningar under tillberedning</h2>
    {RenderIncompleteOrders()}
    </section>
    <section style={{background: '#fff6'}}>
    <h2>Färdiga beställningar</h2>
    {RenderCompleteOrders()}
    </section>
  </CartPageMain>
  )
};