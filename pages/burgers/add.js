import { useState, useEffect } from 'react'
import styled from 'styled-components';
import firebaseInstance from '../../config/firebase';
import { useCart } from '../../config/shoppingcart';
import { useAuth } from '../../config/auth';
import { useRouter } from 'next/router';


export default function AddBurger() {
  const [burger, setBurger] = useState([]);
  const [fries, setFries] = useState([]);
  const [drinks, setDrinks]=useState([]);
  const [error, setError] = useState(null);


  const {user, loading, isAuthenticated} = useAuth();
  const router = useRouter();

  if(loading) {
    return<h2>loading...</h2>
  };

  if(!isAuthenticated) {
    router.push('/loginsignup/login')
    return <h2 style={{marginTop: '15%'}}>Du är inte inloggad</h2>
  };

  // cart.setProductLine(cart.productLines.filter((item) => item.id !== id))
  //button onClick={() => handleremove(item.id)}

  const cart = useCart();

  useEffect(() => {
    firebaseInstance.firestore().collection('burgers')
    .onSnapshot((querySnapshot) => {
      setBurger(querySnapshot.docs.map(burger => burger.data()))
    });
  }, []);

  useEffect(() => {
    firebaseInstance.firestore().collection('fries')
    .onSnapshot((querySnapshot) => {
      setFries(querySnapshot.docs.map(fries => fries.data))
    });
  }, []);

  useEffect(() => {
    firebaseInstance.firestore().collection('drinks')
    .onSnapshot((querySnapshot) => {
      setDrinks(querySnapshot.docs.map(drinks => drinks.data))
    });
  }, []);

  const burgerMenu = burger.map(burger => {
    return(
      <div key={burger.id}>
        <h2>{burger.type}</h2>
        <p>{burger.desc}</p>
        <span>{burger.price}NOK</span>
        <button onClick={() => {
          cart.addProductLine({
            title: burger.type,
            price: burger.price,
            // quantity: burger.quantity
          })
        }}>+</button>
      </div>
    )
  })

  const friesMenu = fries.map(fries => {
    return(
      <div key={fries.id}>
        <h2>{fries.type}</h2>
        <p>{fries.size}</p>
        <span>{fries.price}</span>
        <button onClick={() => {
          cart.addProductLine({
            title: fries.type,
            price: fries.price,
            quantity: fries.quantity
          })
        }}>+</button>
      </div>
    )
  })

  const drinksMenu = drinks.map(drink => {
    return(
      <div key={drink.id}>
        <h2>{drink.type}</h2>
        <span>{drinks.price}</span>
        <button onClick={() => {
          cart.addProductLine({
            title: drinks.type,
            price: drinks.price,
            quantity: drinks.quantity
          })
        }}>+</button>
      </div>
    )
  })

  const checkout = async () => {
    console.log(cart)
    try {
      await firebaseInstance.firestore().collection('orders').set({
        neworder: cart.productLines
      })
    } catch(error) {
      setError(error.message);
      console.log('Något gick fel med din beställning!');
    }
  };


return (
    <main>
      <h2 style={{marginTop: '15%'}}>Burgers</h2>
      {burgerMenu}
      {friesMenu}
      {drinksMenu}
      <h2>Kundvagn</h2>
        <ul>
          {cart.productLines.map((items) => {
            return (
              <li>
                <div key={items.id}>
                  {items.title} - {items.price}NOK 
                  {/* lägg till {items.quantity} */}
                </div>
              </li>
            )
          })}
        </ul>
        <p>Total: {cart.total}NOK</p>
        {/* <p>Varor i din beställning: {cart.quantity}</p> */}
        <button onClick={checkout}>Lägg till beställning!</button>
    </main>
  )
};
