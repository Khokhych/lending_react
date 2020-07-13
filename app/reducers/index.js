import {
  combineReducers,
} from 'redux';

import data from './data';
import switcher from './switcher';
import formsOptions from './formsOptions';

export default combineReducers({
  switcher,
  data,
  formsOptions,
});