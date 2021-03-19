import styled from 'styled-components';


export const MenuMain = styled.main`
position: absolute;
top: 0;
min-height: 100vh;
width: 100%;
background-image: url("/menubackground.jpg");
background-repeat: no-repeat;
background-size: cover;
`;

export const MenuSection = styled.section`
  display: grid;
  justify-content: center;
`;

export const MenuTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-top: 2em;
  color: black;
`;


export const MenuWrapper = styled.article`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 50px 50px;
grid-gap: 4em;
min-height: 250px;
max-width: 720px;
`;


export const ItemsTitle = styled.h3`
font-size: 2rem;
color: black;
text-align: center;
`;

export const MenuItems = styled.div`
height: 100px;
margin-top: 2em;
line-height: 1.5rem;
background: rgba( 214, 213, 213, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 2.5px );
-webkit-backdrop-filter: blur( 2.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;
