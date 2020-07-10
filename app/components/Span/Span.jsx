import React from 'react';
import { useDispatch } from 'react-redux';
import './span.sass';

const dispatch = useDispatch();
export default () => {
  dispatch({ type: 'increment' });
  return (
    <div>
      <div>span</div>
      <button type="button" className="span" onClick={click}> sssss </button>
    </div>
  );
};
