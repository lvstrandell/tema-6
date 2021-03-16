import styled from 'styled-components';


export const OrderMain = styled.main`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 64rem;
`;

export const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

export const Container = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: 1px solid black;
  border-radius: 10px;
  width: 80%;
  max-width: 50vw;
  margin-top: 15%;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1em;
  height: fit-content;
  min-height: 50px;
`;

export const CartContainer = styled.article`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1em;
  min-height: 50vh;
  max-height: 25rem;
  width: 80%;
  border: 1px black solid;
  border-radius: 10px;
  min-height: 50px;
  margin-top: 15%;
`;

export const CartWrapper = styled.div`
  max-height: 15rem;
  width: 100%;
  overflow-y: auto;
`;

export const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff3;
  padding: .5em;
  margin: 1em;
  border: 1px solid black;
  border-radius: 5px;
`;

export const CartButton = styled.button`
  width: 20px;
  background-color: black;
  color: #ffae42;
  margin-left: .5em;

  &:hover {
    background-color: red;
    color: white;
  }
`;

export const CheckoutButton = styled.button`
  padding: .5rem;
  border-radius: 10px;
  background-color: black;
  color: #ffae42;

  &:hover {
    background-color: #23c118;
    color: white;
  }
`;

export const OrderButton = styled.button`
  width: 115px;
  height: 80px;
  backdrop-filter: blur(20px);
  background: linear-gradient(to bottom, #fff1, #ffae42);
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(122, 75, 22, 9);

  &:hover {
    background-color: #F86B06;
  }

  &:hover::after{
    color: white;
    content: ' Lägg Till!';
  }
`;