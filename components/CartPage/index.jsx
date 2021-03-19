import styled from 'styled-components';

export const CartPageMain = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;
`;

export const PrepSection = styled.section`
  width: 30rem;
  height: 30rem;
  padding: 1.5em;
  overflow-y: auto;
  border: solid 2px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PrepContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
`;

export const PrepOrder = styled.div`
  min-height: 5rem;
  width: 15rem;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5em;
  background: rgba( 214, 213, 213, 0.45 );
  box-shadow: 0 3px 25px 0 rgba(255, 84, 0, 0.9);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const ComplOrder = styled.div`
  min-height: 5rem;
  width: 15rem;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5em;
  background: rgba( 13, 194, 13, 0.45 );
  box-shadow: 0 8px 25px 0 rgba(91, 180, 69, 0.9);
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
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