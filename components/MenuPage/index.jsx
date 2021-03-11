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

margin-left: 25%;
`;


export const ItemsTitle = styled.h3`
font-size: 2rem;
color: black;
text-align: center;
`;

export const MenuItems = styled.div`
height: 100px;
border: 1px solid black;
margin-top: 2em;
line-height: 1.5rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

background-color: #fff9;
`;
