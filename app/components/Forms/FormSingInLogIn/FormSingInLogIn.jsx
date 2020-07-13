import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import Button from '../../Button/Button';
import GoogleBtn from '../../GoogleBtn/GoogleBtn';
import './formSingInLogIn.sass';

export default () => {
  const data = useSelector((state) => state.data.forms);
  const open = useSelector((state) => state.formsOptions.formSinginLogin.open);
  const name = useSelector((state) => state.formsOptions.formSinginLogin.name);
  let itemData;
  if (data) {
    itemData = data.logIn;
    if (name === 'login') {
      itemData = data.logIn;
    } else if (name === 'singin') {
      itemData = data.singIn;
    }
  }

  const dispatch = useDispatch();
  return (
    <div className={`form_singin-login${open ? ' form_singin-login-open' : ''}`}>
      {itemData ? (
        <div className="form_singin-login-cont-wrap">
          <div className="form_singin-login-popup" onClick={() => { dispatch({ type: 'FORM_SINGIN-LOGIN-CLOSE' }); }} />
          <div className="form_singin-login-cont">
            <div className="form_singin-login-close" onClick={() => { dispatch({ type: 'FORM_SINGIN-LOGIN-CLOSE' }); }} />
            <div className="form_singin-login-title">
              {itemData.title}
            </div>

            <form className="form_singin-login-form">
              {itemData.inputs.map((item, i) => (
                <FormInput data={item} id={Math.random()} />
              ))}
              <Button type="submit" bg="true" text={itemData.submit} />
            </form>
            <div className="form_singin-login-desc"><span className="form_singin-login-desc-cont">{itemData.desc}</span></div>
            <GoogleBtn text={data.signInGoogle} />
            <div className="form_singin-login-bottom">
              {itemData.links.map((item, i) => (
                <div className="form_singin-login-bottom-item" key={i}>
                  {item.type === 'link' ? (<a href={item.link} target="_blank" className="form_singin-login-bottom-link">{item.text}</a>) : ''}
                  {item.type === 'text' ? (<span className="form_singin-login-bottom-tex">{item.text}</span>) : ''}
                  {item.type === 'changeform' ? (
                    <span
                      onClick={() => { dispatch({ type: 'FORM_SINGIN-LOGIN-CHANGEFORM' }); }}
                      className="form_singin-login-bottom-changeform"
                    >
                      {item.text}
                    </span>
                  )
                    : ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : ''}
    </div>
  );
};
