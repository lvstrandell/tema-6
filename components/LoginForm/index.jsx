import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  height: 20rem;;
  margin: 2rem auto;

  background: rgba( 255, 0, 0, 0.45 );
  box-shadow: 0 8px 32px 0 rgba(255, 84, 0, 0.9);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  

  input {
    margin: 1rem auto;
    border-radius: 20px;
    padding: .5em;
    background-color: black;
    color: #ffae42;
  }

  button {
    background-color: black;
    color: #ffae42;
    border-radius: 20px;
    padding: .8em;

    &:hover{
      background-color: #23c118;
    color: white;
    }
  }

  a {
    margin-top: 1em;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    padding: .5em;

    &:hover {
      color: #ffae42;
      background-color: black;
      cursor: pointer;
      border-radius: 20px;
    }
  }
`;

export default LoginForm;