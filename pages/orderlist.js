import firebaseInstance from '../config/firebase';
import Link from 'next/link'
import { useState, useEffect } from 'react';

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
  }, [])

  const RenderIncompleteOrders = () => {
    let incompleteOrders = [...newOrders.filter((order) => order.complete === false)]
    return incompleteOrders.map((item) => {
        return item.order.map(productLine => {
          return (
          <div key={productLine.id}>
            <h3>{productLine.title}</h3>
            <button>Färdig</button>
          </div>
          )
        })
    })
  }




return(
  <main style={{marginTop: '10%'}}>
    <h2>Beställningar under tillberedning</h2>
    {RenderIncompleteOrders()}
    <hr />
    <h2>Färdiga beställningar</h2>
  </main>
  )
};