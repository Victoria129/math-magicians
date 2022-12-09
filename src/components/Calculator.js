/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="main-wrap">
        <div className="container">
          <div className="operator display">0</div>
          <div className="operator AC">AC</div>
          <div className="operator operations">+/-</div>
          <div className="operator percentage">%</div>
          <div className="operator divide operation">÷</div>
          <div className="operator seven">7</div>
          <div className="operator eight">8</div>
          <div className="operator nine">9</div>
          <div className="operator multiply operation">×</div>
          <div className="operator four">4</div>
          <div className="operator five">5</div>
          <div className="operator six">6</div>
          <div className="operator minus operation">-</div>
          <div className="operator one">1</div>
          <div className="operator two">2</div>
          <div className="operator three">3</div>
          <div className="operator plus operation">+</div>
          <div className="operator zero">0</div>
          <div className="operator period">.</div>
          <div className="operator equal operation">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
