import React from 'react';
import { useSelector } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import Button from '../../Button/Button';
import './formStatic.sass';

export default () => {
  const data = useSelector((state) => state.data.forms);
  return (
    <div className="form_static">
      {data ? (
        <div className="form_static-cont">
          <div className="form_static-top">
            <div className="form_static-title">
              {data.staticTitle}
            </div>
            <div className="form_static-benefits">
              {data.staticDesc.map((item) => (
                <div className="form_static-benefits-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <form className="form_static-bottom">
            {data.singIn.inputs.map((item) => (
              <FormInput data={item} id={Math.random()} />
            ))}
            <Button type="submit" bg="true" text={data.staticButton} />
          </form>
        </div>
      ) : ''}
    </div>
  );
};
