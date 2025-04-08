import './App.css';
import {useState} from "react";
import Controller from './component/Controller';
import Views from './component/View';

function App() {
  const [count, setCount] = useState(0);

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div className="App">

      <h1>Counter</h1>
      <section>
        <Views count={count}/>
      </section>
      <section>
        <Controller onClickBtn={onClickBtn} onReset={onReset}/>
      </section>
    </div>
  );
}

export default App;
