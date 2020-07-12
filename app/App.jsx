import React from 'react';
import { useDispatch } from 'react-redux';

import './sass/app.sass';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Rates from './components/Rates/Rates';
import Svg from './components/Svg/Svg';

export default () => {
  const dispatch = useDispatch();
  function getData() {
    return fetch('./data.json')
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'ADD_DATA', payload: json }));
  }
  getData();
  return (
    <div>
      <Svg />
      <Header />
      <Intro />
      <Loader />
      <Rates />

    </div>
  );
};
