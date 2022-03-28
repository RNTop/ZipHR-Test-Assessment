import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppFastImage from '../../../components/AppFastImage';
import {IStory} from '../../../models';

interface IStoryItem {
  story: IStory;
}

export const StoryItem = ({story}: IStoryItem) => {
  return (
    <View>
      <AppFastImage uri={story.multimedia[0].url} imageStyle={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
