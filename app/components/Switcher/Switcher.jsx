import React from 'react';
import { useSelector } from 'react-redux';
import './switcher.sass';

export default () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="switcher">
      <label className="switcher-cont" htmlFor="switcher-label">
        <span>{data.switcher && data.switcher.first }</span>
        <input type="checkbox" />
        <span>{data.switcher && data.switcher.second.name }</span>
        <span>{data.switcher && data.switcher.second.desc }</span>
      </label>
    </div>
  );
};
