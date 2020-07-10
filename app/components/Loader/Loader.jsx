import React from 'react';
import { useSelector } from 'react-redux';

import './loader.sass';

export default () => {
  const count = useSelector((state) => state.data);
  const hidden = Object.keys(count).length ? ' hidden' : '';
  return (
    <div className={`loader${hidden}`}>
      <div className="loader-popup" />
      <div className="loader-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

    </div>
  );
};
