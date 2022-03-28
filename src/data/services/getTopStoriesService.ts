import {IStory} from '../../models';
import {ENV} from '../../zip-hr-export';

interface IGetTopStoriesService {
  status: string;
  section: string;
  results: IStory[];
}

export const getTopStoriesService = (
  section: string = 'home',
): Promise<IGetTopStoriesService> => {
  return fetch(
    `${ENV.API_URL}/${section}.json?api-key=${ENV.NYTIMES_API_KEY}`,
  ).then(response => response.json());
};
