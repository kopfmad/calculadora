import "./App.css";
import MyButton from "./MyButton";

function App() {
  return (
    <div className="App">
      <header>
        <div>Giant Calculator</div>
      </header>
      <main>
        <div className="calculator">
          <div className="row1">
            <input />
            <MyButton titulo="C" />
          </div>
          <div className="row2">
            <MyButton titulo="9" />
            <MyButton titulo="8" />
            <MyButton titulo="7" />
            <MyButton titulo="/" />
          </div>
          <div className="row3">
            <MyButton titulo="6" />
            <MyButton titulo="5" />
            <MyButton titulo="4" />
            <MyButton titulo="*" />
          </div>
          <div className="row4">
            <MyButton titulo="3" />
            <MyButton titulo="2" />
            <MyButton titulo="1" />
            <MyButton titulo="-" />
          </div>
          <div className="row5">
            <MyButton titulo="." />
            <MyButton titulo="0" />
            <MyButton titulo="=" />
            <MyButton titulo="+" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
