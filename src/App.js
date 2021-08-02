import { useState } from "react";
import MyButton from "./MyButton";

function App() {
  let [phrase, setPhrase] = useState("");

  function btnPressed(input) {
    setPhrase((oldstate) => oldstate + input);
  }

  function evaluate() {
    let answer = eval(phrase);
    setPhrase(answer);
  }

  function clearall() {
    setPhrase("");
  }

  return (
    <div className="App">
      <header>
        <div>Giant Calculator</div>
      </header>
      <main>
        <div className="calculator">
          <div className="row1">
            <input value={phrase} />
            <MyButton titulo="C" parentfunction={clearall} />
          </div>
          <div className="row2">
            <MyButton titulo="9" parentfunction={btnPressed} />
            <MyButton titulo="8" parentfunction={btnPressed} />
            <MyButton titulo="7" parentfunction={btnPressed} />
            <MyButton titulo="/" parentfunction={btnPressed} />
          </div>
          <div className="row3">
            <MyButton titulo="6" parentfunction={btnPressed} />
            <MyButton titulo="5" parentfunction={btnPressed} />
            <MyButton titulo="4" parentfunction={btnPressed} />
            <MyButton titulo="*" parentfunction={btnPressed} />
          </div>
          <div className="row4">
            <MyButton titulo="3" parentfunction={btnPressed} />
            <MyButton titulo="2" parentfunction={btnPressed} />
            <MyButton titulo="1" parentfunction={btnPressed} />
            <MyButton titulo="-" parentfunction={btnPressed} />
          </div>
          <div className="row5">
            <MyButton titulo="." parentfunction={btnPressed} />
            <MyButton titulo="0" parentfunction={btnPressed} />
            <MyButton titulo="=" parentfunction={evaluate} />
            <MyButton titulo="+" parentfunction={btnPressed} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
