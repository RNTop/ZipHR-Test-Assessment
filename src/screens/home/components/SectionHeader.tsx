import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SECTIONS} from '../../../constants/sections';
import {OutlineButton} from './OutlineButton';

interface ISectionHeader {
  id?: string;
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
