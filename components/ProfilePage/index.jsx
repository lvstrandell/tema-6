import styled from 'styled-components';

export const ProfileMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.section`
  margin-top: 10%;
  width: 30rem;
  height: 100%;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 2rem;
  /* background: rgba( 255, 0, 0, 0.45 ); */
  box-shadow:1px 1px 1px black;
  /* backdrop-filter: blur( 4px ); */
  /* -webkit-backdrop-filter: blur( 4px ); */
  border-radius: 10px;
  border: 1px solid black;;

  h2 {
    font-size: 1.5rem;
    margin: 2em;
  }

  p {
    border-bottom: 2px solid black;
  }

  button {
    transition: 100ms ease;
    &:hover {
      transform: scale(1.1);
      color: red;
    }
  }
`;