import { render } from "preact";
import Frame from "react-frame-component";
import { App } from "./app";
import "./index.css";

render(
  <Frame id="myWidget" frameBorder={0}>
    <App />
  </Frame>,
  document.body
);
