import firebaseInstance from '../config/firebase';
import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ReturnButton from '../components/ReturnButton/index';
import { MenuMain, MenuWrapper, ItemsTitle, MenuItems, MenuTitle } from '../components/MenuPage/index';

function Menu() {
  const [burgers, setBurgers] = useState([]);
  const [fries, setFries] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const refBurgers = firebaseInstance.firestore().collection('burgers')
  const refFries = firebaseInstance.firestore().collection('fries');
  const refDrinks =firebaseInstance.firestore().collection('drinks')

  function getBurgers() {
    setLoading(true);
    refBurgers.onSnapshot((querySnapshot) => {
      const burgers = [];
      querySnapshot.forEach((doc) => {
        burgers.push(doc.data());
      })
      setBurgers(burgers);
      setLoading(false);
    });
  }

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

  function getDrinks() {
    setLoading(true);
    refDrinks.onSnapshot((querySnapshot) => {
      const drinks = [];
      querySnapshot.forEach((doc) => {
        drinks.push(doc.data());
      })
      setDrinks(drinks);
      setLoading(false);
    })
  }

  useEffect(() => {
    getBurgers();
    getFries();
    getDrinks();
  }, []);

  if(loading) {
    <PageTitle>loading....</PageTitle>
  };

  return(
    <MenuMain>
        <MenuTitle>Meny</MenuTitle>
        <ItemsTitle>Burgers</ItemsTitle>
        <MenuWrapper>
        {burgers.map((items) => {
          return(
            <MenuItems key={items.id}>
              <div>
                <h3>{items.type}</h3>
                <p>{items.desc}</p>
                <p>{items.price}NOK</p>
              </div>
            </MenuItems>
          )
        })}
        </MenuWrapper>
        <ItemsTitle>Fries</ItemsTitle>
        <MenuWrapper>
          {fries.map((items) =>{
            return(
              <MenuItems key={items.id}>
                <div>
                  <h3>{items.type}</h3>
                  <p>{items.size}</p>
                  <p>{items.price}NOK</p>
                </div>
              </MenuItems>
            )
          })}
        </MenuWrapper>
        <ItemsTitle>Drinks</ItemsTitle>
        <MenuWrapper>
          {drinks.map((items) =>{
              return(
                <MenuItems key={items.id}>
                  <div>
                    <h3>{items.type}</h3>
                    <p>{items.price}NOK</p>
                  </div>
                </MenuItems>
              )
            })}
        </MenuWrapper>
        <ReturnButton>
            <Link href  ="/">Tillbaka till startsidan</Link>
        </ReturnButton>
    </MenuMain>
  )
}

export default Menu;