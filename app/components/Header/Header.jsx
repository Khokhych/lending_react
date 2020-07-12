/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './header.sass';

import Button from '../Button/Button';

export default () => {
  const data = useSelector((state) => state.data);
  const [burger, setburger] = useState(false);
  const [clickedLinks, setClickedLinks] = useState([]);

  const preventLinks = (e) => {
    if (clickedLinks.find((el) => el === e.target.dataset.index)) return;
    e.preventDefault();
    setClickedLinks([...clickedLinks, e.target.dataset.index]);
  };

  return (
    <header className={`header${(burger ? ' header-open' : '')}`}>
      <div className="container header_container">

        <a href="/" className="header-logo">
          <svg className="svg-icon" width="100" height="26">
            <use xlinkHref="#icon-logo" xmlnsXlink="http://www.w3.org/1999/xlink" />
          </svg>
        </a>

        <div className={`header_nav-wrap${(burger ? ' header_nav-wrap-open' : '')}`}>
          <nav className="header_nav">
            <ul className="header_nav-cont">
              {data.menu && data.menu.map((value, index) => (
                <li
                  key={index}
                  className={`header_nav-item ${clickedLinks.find((el) => +el === index) ? ' header_nav-item-open-sub' : ''}`}
                >
                  <a data-index={index} href={value.url} onClick={value.nav ? preventLinks : null}>
                    {value.name}
                  </a>
                  {value.nav && (
                    <div className="header_nav-sub">
                      {value.nav.map((item, index) => (
                        <div key={index} className="header_nav-sub-item">
                          {item.name && <div className="header_nav-sub-title">{item.name}</div>}
                          <div>
                            {item.cont.map((elem) => (
                              <a href={elem.url}>{elem.name}</a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <Button text={data.buttonHeader} bg="" onClick={null} />
          </nav>
        </div>

        <Button text={data.buttonHeader} bg="true" onClick={null} />

        <div
          className={`header_burger${(burger ? ' header_burger-open' : '')}`}
          onClick={() => { burger ? setburger(false) : setburger(true); }}
        >
          <div className="header_burger-line" />
        </div>

      </div>
    </header>
  );
};
