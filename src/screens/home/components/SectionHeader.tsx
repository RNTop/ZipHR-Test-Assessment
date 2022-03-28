import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SECTIONS} from '../../../constants/sections';
import {OutlineButton} from './OutlineButton';

interface ISectionHeader {
  section: string;
  setSection: (s: string) => void;
}

export const SectionHeader = ({section, setSection}: ISectionHeader) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={SECTIONS}
        renderItem={({item}) => (
          <OutlineButton
            disabled={item === section}
            label={item}
            onPress={() => setSection(item)}
          />
        )}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
