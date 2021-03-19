import PageTitle from '../components/PageTitle/index';
import NavBar from '../components/NavBar/index';
import styled from 'styled-components';
import { useEffect } from 'react';
import firebaseInstance from '../config/firebase'

const Main = styled.main`
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
  background-image: url("/burgerbackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function Home() {
  useEffect(async () => {
    const usersSnapshot = await firebaseInstance.firestore().collection("users").get();

    const users = [];
    usersSnapshot.forEach((doc) => {
    users.push(doc.data());
    });
    console.log("users", users);
  }, []);
  return (
    <Main>
      <NavBar />
      <PageTitle>Børres Burgers</PageTitle>
    </Main>
  )
};