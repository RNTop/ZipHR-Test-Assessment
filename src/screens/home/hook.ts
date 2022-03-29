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
  search: string;
  setSearch: (value: string) => void;
}

export const useTopStories = (): IUseTopStories => {
  const [data, setData] = useState<IStory[]>([]);
  const [filteredData, setFilteredData] = useState<IStory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
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
        setFilteredData(results);
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
        setFilteredData(stories[section]);
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
    setSearch('');
    if (stories && stories[value]) {
      setData(stories[value]);
    } else {
      setData([]);
    }
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value) {
      setFilteredData(
        data.filter(({title}) => {
          const searchData = (title && title.toUpperCase()) || '';
          const textData = value.toUpperCase();
          return searchData.indexOf(textData) > -1;
        }),
      );
    } else {
      setFilteredData(data);
    }
  };

  return {
    loading,
    section,
    setSection,
    data: filteredData,
    search,
    setSearch: handleSearch,
  };
};
