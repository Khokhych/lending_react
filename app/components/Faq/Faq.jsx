import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './faq.sass';

export default () => {
  const data = useSelector((state) => state.data.Faq);

  const [openRowsOptions, setOpenRowsOptions] = useState([]);

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

  const createMarkup = (html) => ({ __html: html });

  return (
    <div className="faq">
      {data
      && (
      <div className="container faq-container">
        <h2 className="faq-title">{data.title}</h2>

        <div className="faq-content">
          {data.list.map((item, index) => (
            <div className={`faq-content-item${openRowsOptions.find((e) => e === 1 + index) ? ' faq-content-item-open' : ''}`}>
              <div index={1 + index} className="faq-content-item-title" onClick={clickRowOptions}>
                {item.title}
              </div>
              <div className="faq-content-item-desc" dangerouslySetInnerHTML={createMarkup(item.text)} />
            </div>
          )) }
        </div>
      </div>
      )}
    </div>
  );
};
