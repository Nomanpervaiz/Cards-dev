import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [BackGroundColor, setBackGroundColor] = useState("");
  const [array, setArray] = useState([])


  const createCard = () => {
    setArray([...array, {
      text: text,
      color: color,
      bgColor: BackGroundColor
    }
  ])
  setText("")
  setColor("")
  setBackGroundColor("")
  }


  return (
    <>
      <div className="inputDiv">
        <input
          value={text}
          type="text"
          placeholder="Enter your Text"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          value={color}
          type="text"
          placeholder="Enter your color"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          value={BackGroundColor}
          type="text"
          placeholder="Enter your backgroundcolor"
          onChange={(e) => setBackGroundColor(e.target.value)}
        />
        <button onClick={createCard}>Add New Card</button>
      </div>
      <Cards array={array} />
    </>
  );
}

export default App;
