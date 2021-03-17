import { useState, useEffect } from 'react'
import firebaseInstance from '../config/firebase';
import { useCart } from '../config/shoppingcart';
import { useAuth } from '../config/auth';
import { useRouter } from 'next/router';
import { ItemsTitle } from '../components/MenuPage';
import { 
  OrderMain, 
  GridWrapper, 
  Container, 
  CartContainer,
  CartItems,
  CartButton,
  OrderButton, 
  ClearButton,
  CartWrapper,
  CheckoutButton,
  ItemsContainer,
} from '../components/OrderPage/index';


export default function AddBurger() {
  const [burger, setBurger] = useState([]);
  const [fries, setFries] = useState([]);
  const [drinks, setDrinks]=useState([]);
  const [error, setError] = useState(null);
  const {user, loading, isAuthenticated} = useAuth();
  const router = useRouter();
  const cart = useCart();


  useEffect(() => {
    firebaseInstance.firestore().collection('burgers')
    .onSnapshot((querySnapshot) => {
      const burgers = [];
      querySnapshot.forEach((doc) => {
        burgers.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setBurger(burgers)
    });

    firebaseInstance.firestore().collection('fries').orderBy('id')
    .onSnapshot((querySnapshot) => {
      const fries = [];
      querySnapshot.forEach((doc) => {
        fries.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setFries(fries)
    })

    firebaseInstance.firestore().collection('drinks')
    .onSnapshot((querySnapshot) => {
      const drinks = [];
      querySnapshot.forEach((doc) => {
        drinks.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setDrinks(drinks)
    });
  }, []);

  const burgerMenu = burger.map(burger => {
    return(
        <OrderButton key={burger.id} onClick={() => {
          cart.addProductLine({
            title: burger.type,
            price: burger.price,
            id: burger.id,
            // quantity: burger.quantity
          })
        }}>
          <h2>{burger.type}</h2>
          <span>{burger.price} NOK</span>
          <br />
        </OrderButton>
    )
  })

  const friesMenu = fries.map(fries => {
    return(
        <OrderButton key={fries.id} onClick={() => {
          cart.addProductLine({
            title: fries.type,
            price: fries.price,
            id: fries.id,
            // quantity: fries.quantity
          })
        }}>
        <h2>{fries.type}</h2>
        <span>{fries.price} NOK</span>
        <br />
        </OrderButton>
    )
  })

  const drinksMenu = drinks.map(drink => {
    return(
        <OrderButton key={drink.id} onClick={() => {
          cart.addProductLine({
            title: drink.type,
            price: drink.price,
            id: drink.id,
            // quantity: drink.quantity
          })
        }}>
          <h2>{drink.type}</h2>
          <span>{drink.price} NOK</span>
        <br />
        </OrderButton>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/orderlist')
    const orderCollection = firebaseInstance.firestore().collection('orders');
    orderCollection.doc().set({
      order: [...cart.productLines],
      complete: false,
    })
    .then(() => {
      console.log('Ny beställning!')
    })
    .catch(error => {
      console.error(error)
    })
};


 const handleRemove = (event) => {
  cart.productLines.splice(event.target.value, 1)
  console.log(cart.productLines)
  alert('Beställning borttagen!')

    // cart.productLines.filter(items => items.id !== id)
    // alert('Beställning borttagen!')
  }
    
const emptyCart = () => {
  const clearCart = []
  cart.productLines(clearCart)
}

if(loading) {
  return<ItemsTitle style={{marginTop: '10%'}}>loading...</ItemsTitle>
};

if(!isAuthenticated) {
  router.push('/loginsignup/login')
  return <h2 style={{marginTop: '10%'}}>Du måste vara inloggad för att beställa</h2>
};



return (
    <OrderMain>
      <GridWrapper>
      <Container>
        <ItemsTitle>Burgers</ItemsTitle>
          <ItemsContainer>
          {burgerMenu}
          </ItemsContainer>
        <ItemsTitle>Fries</ItemsTitle>
          <ItemsContainer>
            {friesMenu}
          </ItemsContainer>
        <ItemsTitle>Drinks</ItemsTitle>
        <ItemsContainer>
          {drinksMenu}
          </ItemsContainer>
      </Container>
      <CartContainer>
      <ItemsTitle>Kundvagn</ItemsTitle>
        <CartWrapper>
        <ul>
          {cart.productLines.map((items) => {
            return (
              <CartItems key={items.id}>
                <li>
                {/* X {items.quantity}  */}
                    {items.title} - {items.price}NOK
                </li>
                <CartButton onClick={(event) => handleRemove(event)}>-</CartButton>
              </CartItems>
            )
          })}
        </ul>
        </CartWrapper>
        <p>Total: {cart.total}NOK</p>
        <CheckoutButton onClick={handleSubmit}>Lägg till beställning!</CheckoutButton>
        <ClearButton onClick={emptyCart}>Töm kundvagnen</ClearButton>
        </CartContainer>
        </GridWrapper>
    </OrderMain>
  )
};
