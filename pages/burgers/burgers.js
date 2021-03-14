import firebaseInstance from '../../config/firebase';
import { useState, useEffect } from 'react'
import MenuButton from '../../components/MenuButton/index';
import MenuTitle from '../../components/MenuTitle';
import InputBlock from '../../components/InputBlock';



function Burgers() {
  const [burgers, setBurgers] = useState([]);
  const [burger, setBurger] = useState(null);
  const [loading, setLoading] = useState(false);

  const ref = firebaseInstance.firestore().collection('burgers');

  function getBurgers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const burgers = [];
      querySnapshot.forEach((doc) => {
        burgers.push(doc.data());
      })
      setBurgers(burgers);
      setLoading(false);
    });
  }

  useEffect(() => {
    getBurgers();
  }, []);

  function handleBurgerChange(event) {
    setBurger(event.target.type);
  };


function handleSubmit(event) {
  event.preventDefault();
  const orderCollection = firebaseInstance.firestore().collection('orders');
  orderCollection.doc().set({
    burger: burger,
  })

  .then(() => {
    console.log('Ny burger!')
  })
  .catch(error => {
    console.error(error)
  })
};
  

  function addBurgers(event) {
    setBurger(event.target.value);
    orderRef.doc().set({burger: burger})
    .then(() => {
      console.log('Burger lagt till')
    })
    .catch((error) => {
      console.error(error)
    })
  };

  function deleteBurgers(burgers) {
    ref.doc(burgers.id).delete()
    .catch((error) => {
      console.error(error)
    });
  };

  if(loading) {
    return <h1>Loading...</h1>
  };

  return (
    <main>
      <MenuTitle>Burgers</MenuTitle>
      {burgers.map(item => {
          return(
            <div key={item.id}>
              <h2>{item.type}</h2>
              <p>{item.price} NOK</p>
                <InputBlock 
                  inputName={item.type}
                  inputId={item.id}
                  inputType="checkbox"
                  inputValue={item.type}
                  inputChangeHandler={event => handleBurgerChange(event)}
                />
                <InputBlock 
                  inputName={item.type}
                  inputId={item.id}
                  inputType="text"
                  labelText="Ta bort ingredienser"
                  inputChangeHandler={event => handleIngredientsChange(event)}
                /> 
            </div>
          )
        })}
    </main>
  )
}

export default Burgers;