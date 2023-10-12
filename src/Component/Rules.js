import React from "react";
import styled from "styled-components";

export default function Rules() {
  return (
    <RulesContainer>
      <div className="Header">
        <h1> How To Play Dice Game</h1>
        <p>Select any Number</p>
        <p>Click on dice Image</p>
        <p>
          After clicking on dice image if selected number is equal to dice
          number you will get some point as a dice
        </p>
        <p>If you guess wrong your point deducted</p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 24px;
  width: 794px;
  height: 208px;
  left: 338px;
  top: 776px;
  color: black;
  background: #fbf1f1;
  margin-top: 50px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
