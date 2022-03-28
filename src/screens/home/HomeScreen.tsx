import React from 'react';
import {FlatList, Text} from 'react-native';
import {MainContainer} from '../../components';
import {IUseTopStories} from './hook';
import {StoryItem} from './components';

export interface IHomeScreen {
  storiesInfo: IUseTopStories;
}

const HomeScreen = ({storiesInfo}: IHomeScreen) => {
  return (
    <MainContainer>
      <Text>{storiesInfo.section}</Text>
      <FlatList
        listKey="top-stories"
        data={storiesInfo.data}
        renderItem={({item}) => <StoryItem story={item} />}
        keyExtractor={item => item.title}
      />
    </MainContainer>
  );
};

export default HomeScreen;
