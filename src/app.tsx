import { useEffect, useState } from "preact/hooks";
import "./app.css";

window.app = {};

export function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    window.app.setName = setName;
    return () => (window.app.setName = undefined);
  }, []);

  return <h1>Hello {name}</h1>;
}
