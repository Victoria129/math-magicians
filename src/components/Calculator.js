/* eslint-disable react/prefer-stateless-function */
import './calculator.css';
import '../logic/operate';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const { calcStates, handleClick } = props;
  const { total, next } = calcStates;
  let val = 0;
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
        onClick={handleClick}
      >
        AC
      </button>
      <button
        type="button"
        className="operator operations"
        onClick={handleClick}
      >
        +/-
      </button>
      <button
        type="button"
        className="operator percentage"
        onClick={handleClick}
      >
        %
      </button>
      <button
        type="button"
        className="operator divide operation"
        onClick={handleClick}
      >
        ÷
      </button>
      <button
        type="button"
        className="operator seven"
        onClick={handleClick}
      >
        7
      </button>
      <button
        type="button"
        className="operator eight"
        onClick={handleClick}
      >
        8
      </button>
      <button
        type="button"
        className="operator nine"
        onClick={handleClick}
      >
        9
      </button>
      <button
        type="button"
        className="operator multiply operation"
        onClick={handleClick}
      >
        ×
      </button>
      <button
        type="button"
        className="operator four"
        onClick={handleClick}
      >
        4
      </button>
      <button
        type="button"
        className="operator five"
        onClick={handleClick}
      >
        5
      </button>
      <button
        type="button"
        className="operator six"
        onClick={handleClick}
      >
        6
      </button>
      <button
        type="button"
        className="operator minus operation"
        onClick={handleClick}
      >
        -
      </button>
      <button
        type="button"
        className="operator one"
        onClick={handleClick}
      >
        1
      </button>
      <button
        type="button"
        className="operator two"
        onClick={handleClick}
      >
        2
      </button>
      <button
        type="button"
        className="operator three"
        onClick={handleClick}
      >
        3
      </button>
      <button
        type="button"
        className="operator plus operation"
        onClick={handleClick}
      >
        +
      </button>
      <button
        type="button"
        className="operator zero"
        onClick={handleClick}
      >
        0
      </button>
      <button
        type="button"
        className="operator period"
        onClick={handleClick}
      >
        .
      </button>
      <button
        type="button"
        className="operator equal operation"
        onClick={handleClick}
      >
        =
      </button>
    </div>
  );
};

Calculator.propTypes = {
  calcStates: PropTypes.instanceOf(Object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Calculator;
