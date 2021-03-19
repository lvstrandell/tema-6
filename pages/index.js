import PageTitle from '../components/PageTitle/index';
import NavBar from '../components/NavBar/index';
import styled from 'styled-components';

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
  return (
    <Main>
      <NavBar />
      <PageTitle>Børres Burgers</PageTitle>
    </Main>
  )
};