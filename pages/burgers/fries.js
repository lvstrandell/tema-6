import firebaseInstance from '../../config/firebase';
import { useState, useEffect } from 'react'
import MenuButton from '../../components/MenuButton';
import MenuTitle from '../../components/MenuTitle'

function Fries() {
  const [fries, setFries] = useState([]);
  const [loading, setLoading] = useState(false);

  const refFries = firebaseInstance.firestore().collection('fries');

  function getFries() {
    setLoading(true);
    refFries.onSnapshot((querySnapshot) => {
      const fries = [];
      querySnapshot.forEach((doc) => {
        fries.push(doc.data());
      })
      setFries(fries);
      setLoading(false);
    });
  }

  useEffect(() => {
    getFries();
  }, []);

  function addFries() {
    ref.doc().set({
      fries: fries,
    })
    .then(() => {
      console.log('Fries lagt till')
    })
    .catch((error) => {
      console.error(error)
    })
  };

  function deleteFries(fries) {
    ref.doc(fries.id).delete()
    .catch((error) => {
      console.error(error)
    });
  };

  if(loading) {
    return <h1>Loading...</h1>
  };

  return (
    <main>
      <MenuTitle>Fries</MenuTitle>
      {fries.map((items) => {
        return(
        <div key={items.id}>
          <h2>{items.type}</h2>
          <p>{items.size}</p>
          <span>{items.price}NOK</span>
          <MenuButton onClick={() => addFries()}>+</MenuButton>
          <MenuButton onClick={() => deleteFries()}>-</MenuButton>
        </div>
        )
      })}
    </main>
  )
}

export default Fries;