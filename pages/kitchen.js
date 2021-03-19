import firebaseInstance from '../config/firebase';
import { useState, useEffect } from 'react';
import { 
  PrepOrder,
  PrepContainer,
  CompleteBtn,
  CartPageMain,
  PrepSection
} from '../components/CartPage/index';
import { ItemsTitle } from '../components/MenuPage';


export default function Kitchen() {
  const [newOrders, setNewOrders] = useState([])
  
  const orderCollection = firebaseInstance.firestore().collection('orders')
  
  const fetchOrders = async (orderCollection) => {
    await orderCollection.onSnapshot((querySnapshot) => {
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
  
  const completeOrder = (data) => {
    const collection = firebaseInstance.firestore().collection('orders')
    let document = collection.doc(`${data}`)
    console.log(data)
      return document.update({ 
        complete: true
      })
    .then(() => {
      console.log('Beställningen färdig!')
    })
    .catch((error) => {
        console.log(error)
      }) 
  };

  
  const RenderIncompleteOrders = () => {
    let incompleteOrders = [...newOrders.filter((order) => order.complete === false)]
    return incompleteOrders.map((item) => {
        return (
          <PrepContainer key={Math.random() * 1000}>
              <h3>{item.user}</h3>
            <PrepOrder>
            {item.order.map(productLine => {
              return (
              <div key={productLine.id}>
                <h3>{productLine.title}</h3>
              </div>
            )
           })}
          </PrepOrder>
          <CompleteBtn onClick={() => completeOrder(item.id)}>Färdig</CompleteBtn>
        </PrepContainer>
        )
    })
  }

  console.log(newOrders)


return(
  <CartPageMain style={{marginTop: '10%'}}>
    <PrepSection>
    <ItemsTitle>Beställningar</ItemsTitle>
      {RenderIncompleteOrders()}
    </PrepSection>
  </CartPageMain>
  )
}