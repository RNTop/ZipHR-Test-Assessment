import React from 'react';
import HomeScreen, {IHomeScreen} from './HomeScreen';
import {useTopStories} from './hook';

/*
Here, please do define the contollders && handlers
*/

const HomePresenter = () => {
  const storiesInfo = useTopStories();
  const homeScreenProps: IHomeScreen = {
    storiesInfo,
  };
  return <HomeScreen {...homeScreenProps} />;
};

export default HomePresenter;
