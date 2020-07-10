/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './header.sass';

import Button from '../Button/Button';

export default () => {
  const data = useSelector((state) => state.data);
  const [burger, setburger] = useState(false);
  const dd = () => {
    console.log(111);
  };
  return (
    <header className={`header${(burger ? ' header-open' : '')}`}>
      <div className="container header_container">

        <a href="/" className="header-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 75" width="100" height="26">
            <title>Pics.io</title>
            <path fill="#fff" d="M26.2 18.9H.4V74h11.7V54.4h14c11.9 0 18.5-8.2 18.5-17.8.1-9.6-6.4-17.7-18.4-17.7zm-1.6 25.2H12.2V29.3h12.5c4.6 0 8.1 2.8 8.1 7.4-.1 4.5-3.5 7.4-8.2 7.4zM52 18.9h11.7V74H52zM101.2 28.4c5.7 0 10.7 3.6 13 8l10.1-5c-3.9-6.9-10.9-13.5-23-13.5C84.8 17.9 72 29.5 72 46.4s12.8 28.5 29.3 28.5c12.1 0 19.1-6.7 23-13.5l-10.1-4.9c-2.3 4.5-7.3 8-13 8-10 0-17.3-7.7-17.3-18.1.1-10.3 7.4-18 17.3-18zM141.3 33.9c0-3.3 2.8-5.5 7.8-5.5 5.6 0 11.6 1.9 16 6l6.5-8.6c-5.4-5-12.7-7.7-21.5-7.7-13 0-20.9 7.6-20.9 16.8 0 20.7 31.7 14 31.7 23.8 0 3.1-3.1 6.1-9.6 6.1-7.6 0-13.6-3.4-17.5-7.4l-6.4 8.9c5.1 5.2 12.7 8.8 23.3 8.8 14.9 0 22-7.6 22-17.7.2-20.6-31.4-14.8-31.4-23.5zM185.9 61.5c-3.6 0-6.7 3.1-6.7 6.7s3.1 6.7 6.7 6.7 6.7-3.1 6.7-6.7-3-6.7-6.7-6.7zM202 18.9h11.7V74H202zM250.7 18C234.1 18 222 29.9 222 46.5S234.1 75 250.7 75c16.7 0 28.8-11.9 28.8-28.5S267.4 18 250.7 18zm0 46.6c-10.2 0-16.7-7.8-16.7-18.1s6.5-18.1 16.7-18.1 16.8 7.8 16.8 18.1c-.1 10.3-6.7 18.1-16.8 18.1zM271.2 7.2L260.8 0h-23l-10.4 7.2H202v7.4h27.4l10.4-7.2h19.1l10.4 7.2h13.3V7.2z" />
          </svg>
        </a>

        <div className={`header_nav-wrap${(burger ? ' header_nav-wrap-open' : '')}`}>
          <nav className="header_nav">
            <ul className="header_nav-cont">
              {data.menu && data.menu.map((value, index) => (
                <li key={index} className="header_nav-item">
                  <a href={value.url}>
                    {value.name}
                  </a>
                  {value.nav && (
                    <div className="header_nav-sub">
                      {value.nav.map((item) => (
                        <div className="header_nav-sub-item">
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
          </nav>
          <Button text={data.buttonHeader} bg="" onClick={dd} />
        </div>

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