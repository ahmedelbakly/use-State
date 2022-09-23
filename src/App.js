import "./App.css";
// import useState from react
import { useState } from "react";

function App() {
  // create useState with const
  const [count, setCount] = useState(0);
  return (
    <div className="App pt-5 pb-5 bg-dark" >
      <h1 className="w-50 text-center bg-info m-auto p-2 rounded-pill text-white ">React useState</h1>
      <p className="h1 text-info mt-5 mb-5" > Count : {count}</p>
      <button 
        className="btn btn-danger m-2 fs-5 ps-3 pe-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary m-2 fs-5 ps-3 pe-3"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>

      <button disabled={count===0?true:false}
        className={`btn btn-primary m-2 fs-5 ps-3 pe-3 `}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
