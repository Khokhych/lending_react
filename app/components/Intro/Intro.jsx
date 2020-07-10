import React from 'react';
import { useSelector } from 'react-redux';
import './intro.sass';

export default () => {
  const data = useSelector((state) => state.data);
  return (
    <div className="intro">
      <div className="container intro_container">
        <h1 className="intro_h1">
          {data.intro && data.intro.h1 }
        </h1>
        <p className="intro_text">
          {data.intro && data.intro.p.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
};
