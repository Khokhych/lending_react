import React from 'react';
import './rates.sass';
import RatesCont from './RatesCont';

export default () => (
  <div className="rates">
    <div className="container rates_container">
      <RatesCont elementsOnOneLine="6" />
      <RatesCont elementsOnOneLine="3" />
      <RatesCont elementsOnOneLine="2" />
      <RatesCont elementsOnOneLine="1" />
    </div>
  </div>
);
