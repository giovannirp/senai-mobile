import { useState } from "react";
import "./style.css";

export function Contador() {
  // usando hooks
  const [contador, setContador] = useState(0);

  const clickIncrement = () => {
   setContador(contador + 1);
  }

  const clickDecrement = () => {
    setContador(contador - 1);
  }

  return (
    <div>
      <h1>Contador</h1>

      <section className="buttons">
        <button onClick={clickIncrement}>Increment</button>
        <button onClick={clickDecrement}>Decrement</button>
      </section>

      <section className="result">
        <strong>{contador}</strong>
      </section>
    </div>
  ) 
}