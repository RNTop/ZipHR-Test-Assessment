import {IStory} from '../../../models';
import {ActionTypes} from '../ActionTypes';

export const updateSection = (section: string) => ({
  type: ActionTypes.UPDATE_SECTION,
  section,
});

export const updateStories = (section: string, data: IStory[]) => ({
  type: ActionTypes.UPDATE_STORIES,
  section,
  data,
});
