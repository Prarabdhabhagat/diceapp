import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import DiceRoll from "./DiceRoll";

export default function PlayGame({ toggle }) {
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const ResetScore = () => {
    setScore(0);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <>
      <Button onClick={toggle}>Go back</Button>
      <MainContainer>
        <NavbarContainer>
          <TotalScore score={score} />
          <NumberSelector
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </NavbarContainer>
        <DiceRoll
          ResetScore={ResetScore}
          currentDice={currentDice}
          rollDice={rollDice}
        />
      </MainContainer>
    </>
  );
}

const Button = styled.button`
  width: 220px;
  height: 44px;
  font-size: 20px;
  color: white;
  background-color: black;
  border-radius: 5px;
  padding: 10px 18px;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    width: 220px;
    height: 44px;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 10px 18px;
    cursor: pointer;
    transition: 0.3s ease-in;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 130px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
