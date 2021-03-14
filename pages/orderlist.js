import firebaseInstance from '../config/firebase';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useCart } from '../config/shoppingcart';

export default function OrderList() {
  const [newOrders, setNewOrders] = useState([]);

  // console.log(test)
  const cart = useCart();

  useEffect(async () => {
    await firebaseInstance.firestore().collection('orders')
    .onSnapshot((querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
        orders.push(doc.data().order)
      })
      setNewOrders(orders)
    })
  })
   
   const kitchenView = newOrders.map(items => {
    return(
      <h1>Bajs</h1>
      // <div key={items.id}>
      //   <h3>{items.title}</h3>
      // </div>
    )
  });

  const RenderOrderPage = () => {
    return(
      <main style={{marginTop: '15%'}}>
        <section>
          <article>
          <h2>Beställningar under tillberedning</h2>
          <hr />
            {kitchenView}
            <br/>
            {JSON.stringify(newOrders)}
          </article>
        </section>
      </main>
    )
  }

  const OrderSkeleton = () => {
    return (
      <div>
        <h1>Din beställning visas här</h1>
        <Link href="/add">Lägg till beställning</Link>
      </div>
    )
  }
// console.log(orders)
return(
  <main style={{marginTop: '15%'}}>
    {newOrders === undefined ? OrderSkeleton() : RenderOrderPage()}
  </main>
  )
};