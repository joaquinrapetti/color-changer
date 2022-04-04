import React, { useState } from "react";
import Input from "./components/Input";
import Square from "./components/Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValues, setHexValues] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValues={hexValues}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValues={setHexValues}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
