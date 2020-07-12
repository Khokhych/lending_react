import React from 'react';
import { useDispatch } from 'react-redux';

import './sass/app.sass';
import Svg from './components/Svg/Svg';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Rates from './components/Rates/Rates';
import Testimonial from './components/Testimonial/Testimonial';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';

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
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
};
