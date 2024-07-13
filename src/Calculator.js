import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = 0;

    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number1 / number2;
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Number 2"
        />
      </div>
      <div>
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>-</button>
        <button onClick={() => handleCalculation('*')}>*</button>
        <button onClick={() => handleCalculation('/')}>/</button>
      </div>
      {result !== null && (
        <div>
          <h3>Result: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Calculator;
