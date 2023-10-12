import { useState } from "react";
import StartGame from "./Component/StartGame";
import PlayGame from "./Component/PlayGame";

function App() {
  const [isHoverd, setIsHoverd] = useState(true);

  const goNext = () => {
    setIsHoverd(true);
  };

  const goBack = () => {
    setIsHoverd(false);
  };
  return (
    <>
      {isHoverd ? <PlayGame toggle={goNext} /> : <StartGame toggle={goBack} />}
    </>
  );
}

export default App;
