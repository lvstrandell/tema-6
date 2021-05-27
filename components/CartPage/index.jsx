import styled from 'styled-components';

export const CartPageMain = styled.main`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eee;
  gap: 2em;

  @media screen and (max-width: 768px) {
    margin-top: 5%;
    font-size: .5rem;
  }

`;

export const PrepSection = styled.section`
  width: 30rem;
  height: 35rem;
  padding: 1.5em;
  margin-top: 10%;
  overflow-y: auto;
  border: solid 2px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 880px) {  margin: 15% 0px .5em 1em; }
  @media screen and (max-width: 768px){ font-size: .8rem; gap: 3em;  margin-top: 25%;}
  @media screen and (max-width: 480px){ font-size: .5rem; gap: 5em; }
`;

export const PrepContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;

  @media screen and (max-width: 768px) {
    gap: 1em;
    font-size: .7rem;
    margin: 1em;
  }
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
  background: #333;
  color: #fff;
  box-shadow: 3px 3px 3px #ffae42;
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media screen and (max-width: 768px){ 
    margin: 1em;
    width: 8rem;

    h3 {
      font-size: .7rem;
    }
    }
  @media screen and (max-width: 480px){ font-size: .5rem; gap: 5em; margin: .5em; min-height: 4rem;}
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
  background: #fff;
  box-shadow: 1px 1px 1px #333;
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media screen and (max-width: 768px){ 
    margin: 1em;
    width: 12rem;

    h3 {
      font-size: .7rem;
    }
    }
  @media screen and (max-width: 480px){ font-size: .5rem; margin: .5em; min-height: 4rem;}
`;

export const CompleteBtn = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 10px;
  background-color: black;
  color: #fff;
  font-size: .8rem;
  padding: .5em;

  &:hover {
    background-color: #23c118;
    color: white;
  }

`;

export const KitchenOrder = styled.article`
  min-height: 5rem;
  font-size: .7rem;
  width: 7rem;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5em;
  background: #fff;
  color: #333;
  box-shadow: 3px 3px 3px #333;
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media screen and (max-width: 768px){ 
    font-size: .8rem;
    margin: 1em;
    width: 5rem;
    }
  @media screen and (max-width: 480px){ font-size: .5rem; gap: 1em; margin: .5em;}
`;

export const KitchenUser = styled.h3`
  min-width: 10rem;
  text-decoration: underline #ffae42 3px;
`;