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
  background: rgba( 255, 0, 0, 0.45 );
  box-shadow: 0 8px 32px 0 rgba(255, 84, 0, 0.9);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  h2 {
    font-size: 1.5rem;
    margin: 2em;
  }

  p {
    border-bottom: 2px solid black;
  }
`;