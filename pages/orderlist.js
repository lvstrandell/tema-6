import firebaseInstance from '../config/firebase';
import { useState, useEffect } from 'react';
import { 
  PrepOrder,
  PrepContainer,
  CompleteBtn,
  CartPageMain,
  ComplOrder,
  PrepSection
} from '../components/CartPage/index';

export default function OrderList() {
  const [newOrders, setNewOrders] = useState([])
  
  const orderCollection = firebaseInstance.firestore().collection('orders').where('collected', '==', 'false')
  
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
  }, []);

const collectOrder = (data) => {
  const collection = firebaseInstance.firestore().collection('orders')
  let document = collection.doc(`${data}`)
  console.log(data)
    return document.update({ 
      collected: 'true'
    })
  .then(() => {
    console.log('Beställningen hämtad!')
  })
  .catch((error) => {
      console.log(error)
    }) 
}


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
        </PrepContainer>
        )
    })
  }

  const RenderCompleteOrders =  () => {
    let completeOrders = [...newOrders.filter((order) => order.complete === true)]
    return completeOrders.map((item) => {
        return (
          <PrepContainer key={Math.random() * 1000}>
              <h3>{item.user}</h3>
            <ComplOrder>
            {item.order.map(productLine => {
              return (
                <div key={productLine.id}>
                <h3>{productLine.title}</h3>
                
              </div>
            )
          })}
          </ComplOrder>
          <CompleteBtn onClick={() => collectOrder(item.id)}>Hämta</CompleteBtn>
        </PrepContainer>
        )
      })
  }


return(
  <CartPageMain style={{marginTop: '10%'}}>
    <PrepSection>
    <h2>Beställningar under tillberedning</h2>
    {RenderIncompleteOrders()}
    </PrepSection>
    <PrepSection>
    <h2>Färdiga beställningar</h2>
    {RenderCompleteOrders()}
    </PrepSection>
  </CartPageMain>
  )
};