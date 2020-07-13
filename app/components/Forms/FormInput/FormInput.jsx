import React from 'react';
import './formInput.sass';

export default (props) => (
  <div className={`form_input${props.error ? 'form_input-errore' : ''}`}>
    <label className="form_input-label" htmlFor={props.id}>{props.data.label}</label>
    <input className="form_input-input" id={props.id} placeholder={props.data.placeholder} type={props.data.type} />
    <div className="form_input-error">
      {props.data.error}
    </div>
  </div>
);
