import React from 'react';
import { useSelector } from 'react-redux';
import Switcher from '../Switcher/Switcher';

export default (props) => {

  const rates = useSelector((state) => state.data.rates);
  const count = props.elementsOnOneLine ? props.elementsOnOneLine : 6;
  const carts = [];
  const cartsOptions = [];
  let cartsChunk;

  if(rates){
    for (let index = 0; index < rates.items.length; index++) {
      let item = rates.items[index];
      carts.push(
        <li className="rates_carts-item" key={index}>
      <div className="rates_carts-item-cont">
        <span className="rates_carts-item-name">
          {item.name}
        </span>
        <span className="rates_carts-item-desc">
          {item.desc}
        </span>
        <span className="rates_carts-item-price">
          <span className="rates_carts-item-price-">
            {item.price.currency}
          </span>
          <span className="rates_carts-item-price-">
            {item.price.wrap.annual.amount}
          </span>
          <span className="rates_carts-item-price-">
            {item.price.wrap.annual.per}
          </span>
        </span>
        <span className="rates_carts-item-desc">
          {item.descLong}
        </span>
      </div>
      <span className="rates_carts-item-desc">
        {item.buttonText}
      </span>
    </li>
      );
    }

    const f= (out, i, o)=>{
      const maxChar = count * (out + 1);
      const items  = []

      for(let w = count * out; w < maxChar; w++){
        if(rates.items[w]){
          items.push(
          <p>
            {rates.items[w].options[i][o].text ? rates.items[w].options[i][o].text : rates.items[w].options[i][o]}
          </p>
          );
        }
      }
      
      return items;
    }

    const arr = [];
    for(let out = 0; out < rates.items.length/count; out++){
      for (let i = 0; i < rates.optionsNames.length; i++) {
        let item = rates.optionsNames[i];
            arr.push(<div className="rates_carts-item" key={i}>
            {item.map((elem, o) => (
              <div className="eee">
                
                <span>
                  {o === 0 && <span>></span>}
                  {elem.name ? elem.name : elem}
                </span>
                {f(out, i, o)}

              </div>
            ))}
          </div>);
      }
      cartsOptions.push([...arr])
      arr.length = 0;
    }

  }
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
  if(count && carts.length){
    cartsChunk = chunk(carts ,count );
  }

  return (
    <div className={`rates_item rates_item-count-${count}`}>
        <Switcher />
            <div>
              {cartsOptions.map((item,index)=>(
                  <div>
                    {cartsChunk[index] && cartsChunk[index]}
                    {item}
                  </div>
              ))}
            </div>
    </div>
  );
};
