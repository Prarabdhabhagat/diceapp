import React from "react";
import styled from "styled-components";

export default function NumberSelector({
  error,
  setError,
  setSelectedNumber,
  selectedNumber,
}) {
  const NumberArr = [1, 2, 3, 4, 5, 6];

  const numberSelectedHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <BoxWrapper>
      <p>{error}</p>
      <BoxContainer>
        {NumberArr.map((value, i) => {
          return (
            <Box
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectedHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </BoxContainer>
      <div className="Selectnumber">Select Number</div>
    </BoxWrapper>
  );
}

const BoxContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Selectnumber {
    font-size: 24px;
    font-weight: bolder;
    margin-top: 30px;
  }
  p {
    font-size: 24px;
    color: red;
  }
`;
