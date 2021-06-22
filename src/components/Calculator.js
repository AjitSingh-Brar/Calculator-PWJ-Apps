import React from "react";
import styled from "styled-components";
const Calculator = () => {
  return (
    <Wrapper>
      <Settings>
        <h2>calc</h2>
      </Settings>
      <Input type="number" placeholder="0" />
      <Buttons>
        <Button> 7 </Button>
        <Button> 8 </Button>
        <Button> 9 </Button>
        <DeleteButton> DEL </DeleteButton>
        <Button> 4 </Button>
        <Button> 5 </Button>
        <Button> 6 </Button>
        <Button> + </Button>
        <Button> 1 </Button>
        <Button> 2 </Button>
        <Button> 3 </Button>
        <Button> - </Button>
        <Button> . </Button>
        <Button> 0 </Button>
        <Button> / </Button>
        <Button> x </Button>

        <ResetButton>
          <p>Reset</p>
        </ResetButton>
        <EqualsButton>=</EqualsButton>
      </Buttons>
    </Wrapper>
  );
};

export default Calculator;
const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  margin-top: 75px;
  box-sizing: border-box;
`;
const Settings = styled.div`
  height: 44px;
  width: 400px;
  color: white;
  display: flex;

  h2 {
    font-family: Spartan;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.5333333611488342px;
    text-align: center;
  }
`;
const Input = styled.input`
  height: 80px;
  width: 100%;
  background-color: #181f33;
  margin-bottom: 15px;
  padding: 10px;
  border: none;

  font-size: 35px;
  color: white;
  text-align: right;

  &:focus {
    outline: 0;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
const Buttons = styled.div`
  background-color: #242d44;
  padding: 20px;
  width: 100%;
  border-radius: 8px;

  display: grid;
  justify-items: center;
  grid-template: repeat(5, 1fr) / repeat(4, 1fr);
  grid-gap: 6px;
`;
const Button = styled.div`
  background-color: #eae3dc;
  font-size: 20px;
  border-radius: 6px;
  width: 100%;
  height: 60px;
  color: #434a59;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms ease-in-out 0s;

  &:hover {
    background-color: #00ded0;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #647198;
  color: white;
`;
const ResetButton = styled(Button)`
  background-color: #647198;
  color: white;
  grid-column: span 2;
  width: 100%;
`;
const EqualsButton = styled(Button)`
  background-color: #d03f2f;
  color: white;
  grid-column: span 2;
  width: 100%;
`;
