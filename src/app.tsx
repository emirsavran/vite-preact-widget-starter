import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount((currentCount) => currentCount - 1);

  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: "green",
          position: "fixed",
          bottom: "0",
          right: "0",
        }}
      >
        <h1>Vite App with Zoid</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}
