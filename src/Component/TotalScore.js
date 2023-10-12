import React from "react";
import styled from "styled-components";

export default function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  max-width: 220px;
  text-align: center;

  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
