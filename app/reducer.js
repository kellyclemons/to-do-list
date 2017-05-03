import { combineReducers } from 'redux';
// import userResource from './resources/user';
// import postResource from './resources/post';

export default combineReducers({
  posts(state = [], action) {
    switch (action.type) {
      case 'POST@CREATE':
        return [action.data, ...state];
      default:
        return state;
    }
  }
});
