import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(succ) {
    super(succ);
  }
  handlechange() {}
  render() {
    return (
      <div className="input">
        <form>
          <input
            type="text"
            name="temp"
            className="temp"
            onChange={this.handlechange.bind(this)}
          />
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
