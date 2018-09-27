import React from "react";
import ReactDOM from "react-dom";
import Fahrenheit from "./fahrenheit.js";

import "./styles.css";

class App extends React.Component {
  state = {
    value: 0
  };

  handleChange() {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div>Help!</div>
        <input
          vaule={this.state.value}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <div>...Help!</div>
        <Fahrenheit />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
