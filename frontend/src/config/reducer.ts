import { combineReducers } from 'redux';
import search from '../pages/Search/redux';
import favorite from '../pages/Favorite/redux';
import user from '../pages/Login/redux';

export default combineReducers({
  search,
  favorite,
  user,
});
