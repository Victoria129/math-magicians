/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import '../logic/operate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState) => calculate(previousState, e.target.innerText));
  }

  render() {
    let val = 0;
    const { total, next } = this.state;
    if (next) {
      val = next;
    } else if (total) {
      val = total;
    }

    return (
      <div className="wrapper">
        <input
          className="operator display"
          placeholder="0"
          value={val}
          readOnly
        />
        <button
          type="button"
          className="operator AC"
          onClick={this.handleClick}
        >
          AC
        </button>
        <button
          type="button"
          className="operator operations"
          onClick={this.handleClick}
        >
          +/-
        </button>
        <button
          type="button"
          className="operator percentage"
          onClick={this.handleClick}
        >
          %
        </button>
        <button
          type="button"
          className="operator divide operation"
          onClick={this.handleClick}
        >
          ÷
        </button>
        <button
          type="button"
          className="operator seven"
          onClick={this.handleClick}
        >
          7
        </button>
        <button
          type="button"
          className="operator eight"
          onClick={this.handleClick}
        >
          8
        </button>
        <button
          type="button"
          className="operator nine"
          onClick={this.handleClick}
        >
          9
        </button>
        <button
          type="button"
          className="operator multiply operation"
          onClick={this.handleClick}
        >
          ×
        </button>
        <button
          type="button"
          className="operator four"
          onClick={this.handleClick}
        >
          4
        </button>
        <button
          type="button"
          className="operator five"
          onClick={this.handleClick}
        >
          5
        </button>
        <button
          type="button"
          className="operator six"
          onClick={this.handleClick}
        >
          6
        </button>
        <button
          type="button"
          className="operator minus operation"
          onClick={this.handleClick}
        >
          -
        </button>
        <button
          type="button"
          className="operator one"
          onClick={this.handleClick}
        >
          1
        </button>
        <button
          type="button"
          className="operator two"
          onClick={this.handleClick}
        >
          2
        </button>
        <button
          type="button"
          className="operator three"
          onClick={this.handleClick}
        >
          3
        </button>
        <button
          type="button"
          className="operator plus operation"
          onClick={this.handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="operator zero"
          onClick={this.handleClick}
        >
          0
        </button>
        <button
          type="button"
          className="operator period"
          onClick={this.handleClick}
        >
          .
        </button>
        <button
          type="button"
          className="operator equal operation"
          onClick={this.handleClick}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
