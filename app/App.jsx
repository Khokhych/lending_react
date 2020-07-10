import React from 'react';
import { useDispatch } from 'react-redux';

import './sass/app.sass';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';

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
      <Header />
      <Intro />
      <Loader />
    </div>
  );
};
