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
import { ItemsTitle } from '../components/MenuPage';

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
            <PrepOrder>
              <h3>{item.user}</h3>
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
            <ComplOrder>
              <h3>{item.user}</h3>
            <CompleteBtn onClick={() => collectOrder(item.id)}>Hämta</CompleteBtn>
            </ComplOrder>
        </PrepContainer>
        )
      })
  }


return(
  <CartPageMain style={{marginTop: '10%'}}>
    <PrepSection>
      <ItemsTitle>Mottagna beställningar</ItemsTitle>
      <article>
        {RenderIncompleteOrders()}
      </article>
    </PrepSection>
    <PrepSection>
      <ItemsTitle>Färdiga beställningar</ItemsTitle>
      <section>
        {RenderCompleteOrders()}
      </section>
    </PrepSection>
  </CartPageMain>
  )
};