import Link from 'next/link';
import styled from 'styled-components';
import { useAuth } from '../../config/auth';

const NavBarBase = styled.nav`
  position: fixed;
  top: 0;
  background-color: black;
  width: 100vw;
  z-index: 1;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 70vw;
    margin: auto;
    height: 4em;
    }

    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px solid white;
      font-size: 1.2rem;

      &:hover {
        border-bottom: 2px solid #ffae42;
        color: #ffae42;
      }
    }
`;

const NavLogo = styled.h1`
  font-size: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  padding: .5em;
  color: #ffae42;
  text-shadow: 2px 2px white;
    cursor: pointer;
`;

export default function NavBar() {
  const isAutheticated = useAuth();

  const isNotLoggedIn = () => {
    if(isAutheticated) {
      return (
        <>
        <NavBarBase>
          <ul>
            <li>
              <Link href="/">
                <NavLogo>BB</NavLogo>
              </Link>
            </li>
            <li>
              <Link href="/menu">Meny</Link>
            </li>
            <li>
              <Link href="/add">Beställ</Link>
            </li>
            <li>
              <Link href="/orderlist">Din beställning</Link>
            </li>
            <li>
              <Link href="/loginsignup/profile">Profile</Link>
            </li>
          </ul>
        </NavBarBase>
      </>
      )
    } else {      
      return (
      <>
        <NavBarBase>
        <ul>
          <li>
            <Link href="/">
              <NavLogo>BB</NavLogo>
            </Link>
          </li>
          <li>
            <Link href="/menu">Meny</Link>
          </li>
          <li>
            <Link href="/add">Beställ</Link>
          </li>
          <li>
            <Link href="/loginsignup/login">Logga in</Link>
          </li>
        </ul>
        </NavBarBase>
      </>
   )
  }
  }
  return (
    <>
      {isNotLoggedIn()}
    </>
  )
}