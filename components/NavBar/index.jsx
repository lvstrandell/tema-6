import Link from 'next/link';
import styled from 'styled-components';

const NavBarBase = styled.nav`
  position: fixed;
  top: 0;
  background-color: black;
  width: 100%;
  z-index: 1;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin: 0 1.5rem;
    height: 6em;
    }

    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px solid white;
      font-size: 1.5rem;

      &:hover {
        border-bottom: 2px solid #ffae42;
        color: #ffae42;
      }
    }
`;

const NavLogo = styled.h1`
  font-size: 2rem;
  border-radius: 50%;
  border: 2px solid white;
  padding: .5em;
  color: #ffae42;
  text-shadow: 2px 2px white;
`;

export default function NavBar() {
  return(
    <>
      <NavBarBase>
        <ul>
          <NavLogo>BB</NavLogo>
          <li>
            <Link href="/menu">Meny</Link>
          </li>
          <li>
            <Link href="/burgers/add">Beställ</Link>
          </li>
          <li>
            <Link href="/loginsignup/login">Logga in</Link>
          </li>
        </ul>
      </NavBarBase>
    </>
  )
}