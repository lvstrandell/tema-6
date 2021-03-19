import Link from "next/link";
import styled from 'styled-components';

const RecieptArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  line-height: 2rem;
`;

const Wrapper = styled.div`
  padding: 1em;
  background: rgba( 255, 0, 0, 0.45 );
  box-shadow: 0 8px 32px 0 rgba(255, 84, 0, 0.9);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const StyledButton = styled.button`
  height: 2rem;
  width: 6rem;
  display: block;
  margin: auto;
  border-radius: 10px;
  background-color: black;
  color: #ffae42;
  a{
    text-decoration: none;
    color: #ffae42;
  }
`;

export default function reciept () {

  return (
    <RecieptArticle>
      <Wrapper>
      <h1>Tack för din beställning!</h1>
      <p>Följ med på skärmen för att se när din beställning är färdig</p>
      <p>Ditt ordernamn är din email</p>
      <StyledButton>
        <Link href="/orderlist">Gå vidare</Link>
      </StyledButton>
      </Wrapper>
    </RecieptArticle>
  )
}