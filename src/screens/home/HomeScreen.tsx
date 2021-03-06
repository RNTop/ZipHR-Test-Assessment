import React from 'react';
import {FlatList} from 'react-native';
import {MainContainer, SearchInput} from '../../components';
import {Loader, Title} from '../../components/styled-components';
import {STRINGS} from '../../constants';
import {StoryItem} from './components';
import {SectionHeader} from './components/SectionHeader';
import {IUseTopStories} from './hook';

export interface IHomeScreen {
  storiesInfo: IUseTopStories;
}

const HomeScreen = ({storiesInfo}: IHomeScreen) => {
  return (
    <MainContainer id="home-screen">
      <Title>{STRINGS.title}</Title>
      <SectionHeader
        id="section-list"
        section={storiesInfo.section}
        setSection={storiesInfo.setSection}
      />
      <SearchInput
        id="home-search-input"
        placeholder={STRINGS.keyword}
        onChangeText={storiesInfo.setSearch}
        value={storiesInfo.search}
      />
      <FlatList
        testID="top-stories"
        data={storiesInfo.data}
        renderItem={({item}) => <StoryItem story={item} />}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        ListEmptyComponent={<Loader />}
        removeClippedSubviews
      />
    </MainContainer>
  );
};

export default HomeScreen;
