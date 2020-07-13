import React from 'react';
import './googleBtn.sass';

export default (prop) => (
  <button onClick={prop.onClick} type={prop.type ? prop.type : 'button'} className="google-btn">
    <span className="google-btn-ico-wrap">
      <svg className="svg-icon google-btn-ico">
        <use xlinkHref="#icon-google" xmlnsXlink="http://www.w3.org/1999/xlink" />
      </svg>
    </span>
    <span className="google-btn-text">
      {prop.text}
    </span>
  </button>
);
