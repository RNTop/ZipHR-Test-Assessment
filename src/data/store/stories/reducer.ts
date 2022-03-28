import {ActionTypes} from '../ActionTypes';
import Immutable from 'seamless-immutable';
import {AnyAction} from 'redux';
import {SECTIONS} from '../../../constants/sections';

const INITIAL_STATE = Immutable({
  section: SECTIONS[0],
  stories: {},
});

export const StoriesReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_SECTION:
      return {
        ...state,
        section: action.section,
      };
    case ActionTypes.UPDATE_STORIES:
      return {
        ...state,
        stories: {
          ...state.stories,
          [action.section]: action.data,
        },
      };
    default:
      return state;
  }
};
