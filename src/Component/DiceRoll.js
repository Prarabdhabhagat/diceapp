import React, { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

export default function DiceRoll({ currentDice, rollDice, ResetScore }) {
  const [isRules, setIsRules] = useState(false);
  return (
    <DiceRollContainer>
      <div className="ImageContainer" onClick={rollDice}>
        <img src={`./Images/dice_${currentDice}.png`} alt="random" />
      </div>
      <DiceClick>
        <h1>Click to Dice Roll</h1>
      </DiceClick>
      <Button onClick={ResetScore}>Reset Score</Button>

      <Button className="instruct" onClick={() => setIsRules(!isRules)}>
        {isRules ? "Hide" : "Show"} Rules
      </Button>
      {isRules && <Rules />}
    </DiceRollContainer>
  );
}

const DiceRollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;

  .instruct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 10px 18px;
    width: 220px;
    height: 44px;
    font-size: 20px;
    font-weight: bold;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: #000000;
    margin-top: 20px;
  }
`;

const DiceClick = styled.div`
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 10px 18px;
  width: 220px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
`;
