import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(null);

  const handleButtonClick = (event) => {
    if (
      isNaN(Number(input[input.length - 1])) &&
      isNaN(Number(event.target.innerHTML))
    ) {
      setInput(input.slice(0, -1) + event.target.innerHTML);
    } else {
      setInput(input + event.target.innerHTML);
    }
  };

  const getResult = () => {
    setShowResult(true);
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const cancel = () => {
    setInput("");
    setResult(null);
    setShowResult(false);
  };

  return (
    <div>
      <h2>React Calculator</h2>
      <input type="text" value={input} onChange={() => {}} />
      {result !== undefined && <div>{result}</div>}

      <div className="gridBox">
        <button onClick={handleButtonClick}>7</button>
        <button onClick={handleButtonClick}>8</button>
        <button onClick={handleButtonClick}>9</button>
        <button onClick={handleButtonClick}>+</button>
        <button onClick={handleButtonClick}>4</button>
        <button onClick={handleButtonClick}>5</button>
        <button onClick={handleButtonClick}>6</button>
        <button onClick={handleButtonClick}>-</button>
        <button onClick={handleButtonClick}>1</button>
        <button onClick={handleButtonClick}>2</button>
        <button onClick={handleButtonClick}>3</button>
        <button onClick={handleButtonClick}>*</button>
        <button onClick={cancel}>C</button>
        <button onClick={handleButtonClick}>0</button>
        <button onClick={getResult}>=</button>
        <button onClick={handleButtonClick}>/</button>
      </div>
    </div>
  );
}

export default App;
