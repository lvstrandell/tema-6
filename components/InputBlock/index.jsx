import React from 'react';
import styled from 'styled-components';

const OrderInput = styled.input`
  background-color: black;
  color: #ffae42;

  &:hover {
    background-color: #ffae42;
    color: black;
  }
`;

const OrderLabel = styled.label`
  color: black;
  text-shadow: 2px 2px 2px #ffae42;
`;

function InputBlock({
  inputName,
  inputId,
  inputType,
  inputPlaceholder,
  inputValue,
  labelText,
  inputChangeHandler
}) {
  return(
    <>
      <OrderLabel htmlFor={inputId}>{labelText}</OrderLabel>
      <OrderInput
        type={inputType}
        name={inputName}
        id={inputId}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={event => inputChangeHandler(event)}
      />
    </>
  )
}

export default InputBlock;