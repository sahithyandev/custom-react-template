import * as React from "react";
import * as ReactDOM from "react-dom";
import reactLogo from "./assets/logo.png";
import "./style/main.scss";

export const App = () => {
  return (
    <div>
      <img className="logo" src={reactLogo} />
      <h1>Hello REACT!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
