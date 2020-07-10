import React from 'react';
import './button.sass';

export default (prop) => (
  <button type="button" className={`button${(prop.bg ? ' button_bg' : '')}`}>
    {prop.text}
  </button>
);
