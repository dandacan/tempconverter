import React from "react";
import ReactDOM from "react-dom";
import Fahrenheit from "./fahrenheit.js";

import "./styles.css";

class App extends React.Component {
  constructor(succ) {
    super(succ);
    this.state = {
      value: 0
    };
  }
  handlechange(event) {
    this.setState((this.value: event.target.value));
  }
  render() {
    return (
      <div className="input">
        <form>
          <input
            type="text"
            name="temp"
            className="temp"
            onChange={event => {
              this.handlechange(event);
            }}
          />
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
