import styled from 'styled-components';

const ReturnButton = styled.button`
  display: block;
  margin: auto;
  background-color: black;
  padding: 1em;
  margin-bottom: 1em;

  &:hover{
    background-color: #ffae42;
  }

  a {
    text-decoration: none;
    color: white;
    border-bottom: 1px solid white;

    &:hover {
      color: black;
      border-bottom: solid 1px black;
    }
  }
`;

export default ReturnButton;