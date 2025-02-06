"use client"

import { useState } from 'react';
import "@/styles/calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(parseFloat(display));
      setDisplay(result.toString());
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(result.toString());
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="w-[300px] p-5 rounded-lg bg-border-dark shadow-lg">
      <div className="bg-background-highlight p-5 mb-5 rounded-md text-right text-2xl min-h-[95px]">
        <small className="block text-sm text-gray-600">{equation}</small>
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        <button onClick={clear} className="calculator-button">C</button>
        <button onClick={() => handleOperator('/')} className="calculator-button">/</button>
        <button onClick={() => handleOperator('*')} className="calculator-button">×</button>
        <button onClick={() => handleOperator('-')} className="calculator-button">-</button>
        <button onClick={() => handleNumber('7')} className="calculator-button">7</button>
        <button onClick={() => handleNumber('8')} className="calculator-button">8</button>
        <button onClick={() => handleNumber('9')} className="calculator-button">9</button>
        <button onClick={() => handleOperator('+')} className="calculator-button">+</button>
        <button onClick={() => handleNumber('4')} className="calculator-button">4</button>
        <button onClick={() => handleNumber('5')} className="calculator-button">5</button>
        <button onClick={() => handleNumber('6')} className="calculator-button">6</button>
        <button onClick={handleSquareRoot} className="calculator-button">√</button>
        <button onClick={() => handleNumber('1')} className="calculator-button">1</button>
        <button onClick={() => handleNumber('2')} className="calculator-button">2</button>
        <button onClick={() => handleNumber('3')} className="calculator-button">3</button>
        <button onClick={calculate} className="calculator-button row-span-2">=</button>
        <button onClick={() => handleNumber('0')} className="calculator-button col-span-2">0</button>
        <button onClick={() => handleNumber('.')} className="calculator-button hover:bg-gray-200">.</button>
      </div>
    </div>
  );
};
export default Calculator;
