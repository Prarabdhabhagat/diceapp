import React from "react";
import styled from "styled-components";

export default function StartGame({ toggle }) {
  return (
    <Container>
      <box>
        <img src="./Images/dices.png" alt="random" />
      </box>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
    }
  }
`;

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
