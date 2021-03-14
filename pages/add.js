import { useState, useEffect } from 'react'
import styled from 'styled-components';
import firebaseInstance from '../config/firebase';
import { useCart } from '../config/shoppingcart';
import { useAuth } from '../config/auth';
import { useRouter } from 'next/router';
import { ItemsTitle } from '../components/MenuPage';
import uuid from 'react-uuid'
import { 
  OrderMain, 
  GridWrapper, 
  Container, 
  ItemsContainer, 
  FriesContainer, 
  CartContainer,
  CartItems,
  CartButton,
  OrderButton, 
  CartWrapper,
  CheckoutButton,
} from '../components/OrderPage/index';


export default function AddBurger() {
  const [burger, setBurger] = useState([]);
  const [fries, setFries] = useState([]);
  const [drinks, setDrinks]=useState([]);
  const [error, setError] = useState(null);
  const {user, loading, isAuthenticated} = useAuth();
  const router = useRouter();

  // cart.setProductLine(cart.productLines.filter((item) => item.id !== id))
  //button onClick={() => handleremove(item.id)}

  const cart = useCart();
  console.log(cart)
  useEffect(() => {
    firebaseInstance.firestore().collection('burgers')
    .onSnapshot((querySnapshot) => {
      setBurger(querySnapshot.docs.map(burger => burger.data()))
    });

    firebaseInstance.firestore().collection('fries').orderBy('id')
    .onSnapshot((querySnapshot) => {
      setFries(querySnapshot.docs.map(fries => fries.data()))
    });

    firebaseInstance.firestore().collection('drinks')
    .onSnapshot((querySnapshot) => {
      setDrinks(querySnapshot.docs.map(drinks => drinks.data()))
    });
  }, []);

  const burgerMenu = burger.map(burger => {
    // let id = uuid()
    return(
      <div key={burger.id}>
        <OrderButton onClick={() => {
          cart.addProductLine({
            title: burger.type,
            price: burger.price,
            id: burger.id
          })
        }}>
          <h2>{burger.type}</h2>
          <span>{burger.price} NOK</span>
          <br />
        </OrderButton>
        </div>
    )
  })
  // console.log(burger)

  const friesMenu = fries.map(fries => {
    let id = uuid()
    return(
      <div key={fries.id}>
        <OrderButton onClick={() => {
          cart.addProductLine({
            title: fries.type,
            price: fries.price,
            id: id
          })
        }}>
        <h2>{fries.type}</h2>
        <span>{fries.price} NOK</span>
        <br />
        </OrderButton>
      </div>
    )
  })

  const drinksMenu = drinks.map(drink => {
    let id = uuid()
    return(
      <div key={drink.id}>
        <OrderButton onClick={() => {
          cart.addProductLine({
            title: drink.type,
            price: drink.price,
            id: id
          })
        }}>
        <div key={drink.id}>
          <h2>{drink.type}</h2>
          <span>{drink.price} NOK</span>
        </div>
        <br />
        </OrderButton>
      </div>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/orderlist')
    const orderCollection = firebaseInstance.firestore().collection('orders');
    orderCollection.doc().set({
      order: cart.productLines
    })

    .then(() => {
      console.log('Ny beställning!')
    })
    .catch(error => {
      console.error(error)
    })
};

// const handleRemove = async(id) => {
//   // const find = cart.productsInCart.find((items) => items.price >= 120);
//   try { 
//    await cart.setProductLines(cart.productLines.filter((items) => items.id !== id))
//   console.log('Beställningen borttagen!');
//   } catch (error) {
//     setError(error.message);
//     console.log('Något gick fel')
//   }
// }


if(loading) {
  return<h2>loading...</h2>
};

if(!isAuthenticated) {
  router.push('/loginsignup/login')
  return <h2 style={{marginTop: '15%'}}>Du måste vara inloggad för att beställa</h2>
};



return (
    <OrderMain>
      <GridWrapper>
      <Container>
        <ItemsTitle>Burgers</ItemsTitle>
          <FriesContainer>
          {burgerMenu}
          </FriesContainer>
        <ItemsTitle>Fries</ItemsTitle>
          <FriesContainer>
            {friesMenu}
          </FriesContainer>
        <ItemsTitle>Drinks</ItemsTitle>
        <FriesContainer>
          {drinksMenu}
          </FriesContainer>
      </Container>
      <CartContainer>
      <ItemsTitle>Kundvagn</ItemsTitle>
        <CartWrapper>
        <ul>
          {cart.productLines.map((items) => {
            return (
              <CartItems>
                <li key={items.id}>
                    {items.title} - {items.price}NOK
                </li>
                {/* <CartButton onClick={handleRemove(items.id)}>-</CartButton> */}
              </CartItems>
            )
          })}
        </ul>
        </CartWrapper>
        <p>Total: {cart.total}NOK</p>
        <CheckoutButton onClick={handleSubmit}>Lägg till beställning!</CheckoutButton>
        </CartContainer>
        </GridWrapper>
    </OrderMain>
  )
};
