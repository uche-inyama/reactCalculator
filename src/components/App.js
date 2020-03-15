import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
// eslint-disable-next-line no-unused-vars
import calculate from "../logic/calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };

    const result = calculate(data, buttonName);

    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation
    });
  }

  render() {
    const { total, next, operation } = this.state;
    let result;
    if (operation === null) {
      result = total;
    } else {
      result = next === null ? operation : next;
    }
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
