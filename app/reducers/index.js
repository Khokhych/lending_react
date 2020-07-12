import {
  combineReducers,
} from 'redux';

import data from './data';
import switcher from './switcher';

export default combineReducers({
  switcher,
  data,
});