import React from 'react';
import conCSS from './Quote.module.css';

const Quote = () => (
  <div className={conCSS.container}>
    <h1>Quote</h1>
    <p>
      Great minds think big. Giants in science create
      sensible values that bring light to the most obscure things!
    </p>
  </div>
);

export default Quote;
