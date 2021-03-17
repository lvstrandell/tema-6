import styled from 'styled-components';

export const CartPageMain = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PrepContainer = styled.article`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* display: flex; */
  align-items: center;
  justify-content: center;
`;

export const PrepOrder = styled.div`
  min-height: 5rem;
  width: 10rem;
  margin: .5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5em;
  border: solid 1px black;
  border-radius: 10px;
`;

export const CompleteBtn = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 10px;
  background-color: black;
  color: #ffae42;

  &:hover {
    background-color: #23c118;
    color: white;
  }
`;