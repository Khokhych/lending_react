import React from 'react';
import { useDispatch } from 'react-redux';
import './button.sass';

export default (prop) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => { dispatch(prop.dispatch); }}
      type={prop.type ? prop.type : 'button'}
      className={`button${(prop.bg ? ' button_bg' : '')}`}
    >
      {prop.text}
    </button>
  );
};
