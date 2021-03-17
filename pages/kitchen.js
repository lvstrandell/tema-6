import firebaseInstance from '../config/firebase';
import { useState, useEffect } from 'react';
import { 
  PrepOrder,
  PrepContainer,
  CompleteBtn,
  CartPageMain
} from '../components/CartPage/index';

export default function Kitchen() {
  const [newOrders, setNewOrders] = useState([])
  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(false);
  
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


  const completeOrder =  (event) => {
    event.preventDefault();
    orderCollection.doc().set({
      order: [...cart.productLines],
      complete: true,
    })
    .then(() => {
      console.log('Beställningen är klar!')
    })
    .catch(error => {
      console.error(error)
    })
    } 

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
          <CompleteBtn onClick={event => completeOrder(event)}>Färdig</CompleteBtn>
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
  </CartPageMain>
  )

}