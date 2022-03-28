import {combineReducers} from 'redux';
import {StoriesReducer} from './stories/reducer';

export default combineReducers({
  storiesReducer: StoriesReducer,
});
