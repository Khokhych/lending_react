import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Switcher from '../Switcher/Switcher';
import Button from '../Button/Button';

export default (props) => {
  const rates = useSelector((state) => state.data.rates);
  const switcher = useSelector((state) => state.switcher.switch);

  const [openRowsOptions, setOpenRowsOptions] = useState([]);

  const count = props.elementsOnOneLine ? +props.elementsOnOneLine : 6;

  const carts = [];
  let cartsChunk;
  const cartsOptions = [];

  const clickRowOptions = (e) => {
    const index = +e.target.getAttribute('index');
    if (openRowsOptions.find((e) => e === index)) {
      const indexDelete = openRowsOptions.findIndex((e) => e === index);
      const arr = openRowsOptions.slice();
      arr.splice(indexDelete, 1);
      setOpenRowsOptions([...arr]);
      return;
    }
    setOpenRowsOptions([...openRowsOptions, index]);
  };

  if (rates) {
    for (let index = 0; index < rates.items.length; index++) {
      const item = rates.items[index];
      carts.push(
        <div className={`rates_carts-item rates_carts-item_${index}`} key={index}>
          <div className="rates_carts-item-cont">
            <span className="rates_carts-item-name">
              {item.name}
            </span>
            <span className="rates_carts-item-desc">
              {item.desc}
            </span>
            {!item.img
              ? (
                <span className="rates_carts-item-price">
                  <span className="rates_carts-item-price-currency">
                    {item.price.currency}
                  </span>
                  <span className="rates_carts-item-price-amount">
                    {switcher ? item.price.wrap.monthly.amount : item.price.wrap.annual.amount}
                  </span>
                  <span className="rates_carts-item-price-per">
                    {switcher ? item.price.wrap.monthly.per : item.price.wrap.annual.per}
                  </span>
                </span>
              )
              : (
                <span className="rates_carts-item-img">
                  <img src={item.img} alt="" />
                </span>
              )}
            <span className="rates_carts-item-desc-long">
              {item.descLong}
            </span>
          </div>
          <Button text={item.buttonText} bg="true" dispatch={{ type: 'FORM_SINGIN-LOGIN-OPEN', payload: 'singin' }} />
        </div>,
      );
    }

    const getOptions = (out, i, o) => {
      const maxChar = count * (out + 1);
      const items = [];

      for (let w = count * out; w < maxChar; w++) {
        if (rates.items[w]) {
          items.push(
            <span className="rates_options-cell">
              {rates.items[w].options[i][o].text
                ? rates.items[w].options[i][o].text
                : <svg className="svg-icon"><use xlinkHref={`#icon-support-${rates.items[w].options[i][o]}`} /></svg>}
            </span>,
          );
        }
      }

      return items;
    };
    const arr = [];
    for (let out = 0; out < rates.items.length / count; out++) {
      for (let i = 0; i < rates.optionsNames.length; i++) {
        const item = rates.optionsNames[i];
        arr.push(<div className="rates_options-item" key={i}>
          {item.map((elem, o) => (
            <div key={o} className={`rates_options-row ${openRowsOptions.find((e) => e === +`1${out}${i}${o}`) ? 'rates_options-row-open' : ''}`}>
              <span className="rates_options-cell" index={+`1${out}${i}${o}`} onClick={o === 0 ? clickRowOptions : null}>
                <span>
                  {elem.name ? elem.name : elem}
                </span>
                {elem.desc ? <span className="rates_options-cell-i">і</span> : ''}
                {elem.desc ? (<span className="rates_options-cell-pop">{elem.desc}</span>) : ''}
              </span>
              {getOptions(out, i, o)}
            </div>
          ))}
        </div>);
      }
      cartsOptions.push([...arr]);
      arr.length = 0;
    }
  }
  const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
  if (count && carts.length) {
    cartsChunk = chunk(carts, count);
  }

  return (
    <div className={`rates_item rates_item-count-${count}`}>
      {count < 6 ? <Switcher /> : '' }
      {cartsOptions.map((item, index) => (
        <div key={index} className="rates_item-cont">
          <div className="rates_item-carts">
            {count === 6 ? <Switcher /> : '' }
            {cartsChunk ? cartsChunk[index] : ''}
          </div>
          <div className="rates_options">
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
