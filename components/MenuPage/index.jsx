import styled from 'styled-components';


export const MenuMain = styled.main`
position: absolute;
top: 0;
min-height: 100vh;
min-width: 100vw;
background-image: url("/menubackground.jpg");
background-repeat: no-repeat;
background-size: cover;
`;

export const MenuSection = styled.section`
  display: grid;
  grid-template-columns: (2fr, 1fr, 1fr);
  justify-content: center;
`;

export const MenuTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-top: 2em;
  color: black;
`;

export const BurgerMenuWrapper = styled.article`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 4em;
min-height: 250px;
max-width: 720px;

@media screen and (max-width: 768px){ font-size: .8rem; gap: 6em; }
@media screen and (max-width: 480px){ font-size: .5rem; gap: 10em; }
`;

export const MenuWrapper = styled.article`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 4em;
min-height: 250px;
max-width: 720px;

@media screen and (max-width: 768px){ font-size: .8rem; gap: 6em; }
@media screen and (max-width: 480px){ font-size: .5rem; gap: 10em; }
`;


export const ItemsTitle = styled.h3`
font-size: 2rem;
color: black;
text-align: center;

@media screen and (max-width: 768px){ font-size: 1.5rem; margin-top: 20%; }
@media screen and (max-width: 480px){ font-size: 1rem; }
`;

export const MenuItems = styled.div`
height: 100px;
margin-top: 2em;
line-height: 1.5rem;
background: rgba( 255, 255, 255, 0.85 );
box-shadow: 3px 3px 3px 1px #333;
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

h3 {
  text-align: center;
}

p {
  text-align: center;
}

@media screen and (max-width: 768px){ font-size: .8rem }
@media screen and (max-width: 480px){ font-size: .5rem }
`;
