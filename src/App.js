import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Calculator from './components/Calculator';
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import Quote from './components/Quote';
import calculate from './logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
  });
  const handleClick = (e) => {
    setState((old) => calculate(old, e.target.innerText));
  };

  const { total, next } = state;
  const calcStates = { total, next };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator handleClick={handleClick} calcStates={calcStates} />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default App;
