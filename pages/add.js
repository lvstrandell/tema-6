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

    firebaseInstance.firestore().collection('drinks').orderBy('price')
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
    router.push('/receipt')
    const orderCollection = firebaseInstance.firestore().collection('orders');
    orderCollection.doc().set({
      user: user.email,
      order: [...cart.productLines],
      complete: false,
      collected: 'false'
    })
    .then(() => {
      console.log('Ny best??llning!')
    })
    .catch(error => {
      console.error(error)
    })
};


 const handleRemove = (event) => {
  cart.productLines.splice(event.target.value, 1)
  console.log(cart.productLines)
  router.push('/add')
  alert('Produkt borttagen!')
  }


const emptyCart = () => {
  const clearCart = [];
  cart.productLines.length = 0
  console.log(cart.productLines)
  alert('Best??llnignen borttagen')
  router.push('/add')
}

if(loading) {
  return<ItemsTitle style={{marginTop: '10%'}}>loading...</ItemsTitle>
};

if(!isAuthenticated) {
  router.push('/loginsignup/login')
  return <h2 style={{marginTop: '10%'}}>Du m??ste vara inloggad f??r att best??lla</h2>
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
                    {items.title} - {items.price}NOK
                </li>
                <CartButton onClick={(event) => handleRemove(event)}>-</CartButton>
              </CartItems>
            )
          })}
        </ul>
        </CartWrapper>
        <p>Total: {cart.total}NOK</p>
        <CheckoutButton onClick={handleSubmit}>L??gg till best??llning!</CheckoutButton>
        <ClearButton onClick={emptyCart}>T??m kundvagnen</ClearButton>
        </CartContainer>
        </GridWrapper>
    </OrderMain>
  )
};
