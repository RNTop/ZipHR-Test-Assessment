import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppFastImage from '../../../components/AppFastImage';
import {
  FlexBetweenWrapper,
  H4,
  SmallText,
} from '../../../components/styled-components';
import {COLORS, DIMENSIONS} from '../../../constants';
import {IStory} from '../../../models';

interface IStoryItem {
  story: IStory;
}

export const StoryItem = ({story}: IStoryItem) => {
  if (!story.multimedia) {
    return null;
  }
  return (
    <FlexBetweenWrapper style={styles.container}>
      <AppFastImage uri={story.multimedia[0].url} imageStyle={styles.image} />
      <View style={styles.content}>
        <H4 numberOfLines={2}>{story.title}</H4>
        <View>
          <SmallText>{story.byline}</SmallText>
          <SmallText marginTop={5}>{story.published_date}</SmallText>
        </View>
      </View>
    </FlexBetweenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightDark,
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  content: {
    width: DIMENSIONS._calW(180),
    height: 100,
    justifyContent: 'space-evenly',
  },
});
