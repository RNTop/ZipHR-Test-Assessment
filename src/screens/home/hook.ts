import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTopStoriesService} from '../../data/services';
import {updateSection, updateStories} from '../../data/store/stories/actions';
import {IStore, IStory} from '../../models';

export interface IUseTopStories {
  loading: boolean;
  section: string;
  setSection: (value: string) => void;
  data: IStory[];
}

export const useTopStories = (): IUseTopStories => {
  const [data, setData] = useState<IStory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const section = useSelector((store: IStore) => store.storiesReducer.section);
  const stories = useSelector((store: IStore) => store.storiesReducer.stories);

  useEffect(() => {
    let isMounted = true;
    const fetchStories = async () => {
      setLoading(true);
      const {results} = await getTopStoriesService(section);
      if (isMounted) {
        dispatch(updateStories(section, results));
        setData(results);
        setLoading(false);
      }
    };
    fetchStories();
    return () => {
      isMounted = false;
    };
  }, [section, dispatch]);

  useEffect(() => {
    let isMounted = true;
    let isFirst = true;
    const fetchCacheStories = async () => {
      if (isMounted && isFirst && stories && stories[section]) {
        setData(stories[section]);
        isFirst = false;
      }
    };
    fetchCacheStories();
    return () => {
      isMounted = false;
    };
  }, [section, stories]);

  const setSection = (value: string) => {
    dispatch(updateSection(value));
    if (stories && stories[value]) {
      setData(stories[value]);
    } else {
      setData([]);
    }
  };

  return {
    loading,
    section,
    setSection,
    data,
  };
};
