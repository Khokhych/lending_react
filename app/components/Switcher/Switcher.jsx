import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './switcher.sass';

export default () => {
  const data = useSelector((state) => state.data);
  const switcher = useSelector((state) => state.switcher.switch);
  const dispatch = useDispatch();
  return (
    <div className="switcher">
      <label className="switcher-cont" htmlFor="switcher-label">
        <span className="switcher-text">{data.switcher && data.switcher.first }</span>
        <input className={`switcher-checkbox${switcher ? ' switcher-checkbox-check' : ''}`} type="checkbox" onClick={() => { dispatch({ type: 'SWITCH' }); }} />
        <span className="switcher-text">
          <span className="switcher-text-sub">{data.switcher && data.switcher.second.name }</span>
          <span className="switcher-text-sub">{data.switcher && data.switcher.second.desc }</span>
        </span>
      </label>
    </div>
  );
};
