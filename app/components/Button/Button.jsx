import React from 'react';
import './button.sass';

export default (prop) => (
  <button onClick={prop.onClick} type="button" className={`button${(prop.bg ? ' button_bg' : '')}`}>
    {prop.text}
  </button>
);
