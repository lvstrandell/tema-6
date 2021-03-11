import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 50vw;
  height: 50vh;
  background-color: #fff3;
  margin: 10% auto auto auto;
  border: solid 1px black;

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
  }

  a {
    margin-top: 1em;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
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