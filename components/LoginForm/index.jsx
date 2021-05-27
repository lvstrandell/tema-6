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

  background: #ffae42;
  box-shadow: 1px 1px 1px black;
  border-radius: 10px;
  border: 1px solid black;
  

  input {
    margin: 1rem auto;
    border-radius: 20px;
    padding: .5em;
    background-color: #fff;
    color: #ffae42;
    @media screen and (max-width: 768px){ font-size: .8rem }
    @media screen and (max-width: 480px){ font-size: .5rem }
  }

  button {
    background-color: black;
    color: #ffae42;
    border-radius: 20px;
    padding: .8em;

    &:hover{
      opacity: .8;
      background-color: #112233;
      color: white;
    }
    @media screen and (max-width: 768px){ font-size: .8rem;}
    @media screen and (max-width: 480px){ font-size: .5rem; }
  }

  a {
    margin-top: 1em;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    padding: .5em;

    &:hover {
      color: #ffae42;
      background-color: black;
      cursor: pointer;
      border-radius: 20px;
    }
    @media screen and (max-width: 768px){ font-size: .8rem }
    @media screen and (max-width: 480px){ font-size: .5rem }
  }

  @media screen and (max-width: 768px){ font-size: .8rem; width: 15rem; }
  @media screen and (max-width: 480px){ font-size: .5rem; height: 15rem;}
`;

export default LoginForm;