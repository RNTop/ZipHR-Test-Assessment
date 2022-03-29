import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {ImageButton} from '../button';
import {View} from '../styled-components';
import {COLORS, DIMENSIONS} from '../../constants';

interface ISearchInput {
  value: string | undefined;
  onChangeText: (val: string) => void;
  placeholder: string;
  containerStyle?: any;
}

export function SearchInput(props: ISearchInput) {
  const {value, onChangeText, placeholder, containerStyle = {}} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.grey}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
      <ImageButton
        source={require('../../resource/icons/search.png')}
        imageStyle={styles.search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS._calW(40),
    backgroundColor: COLORS.lightDark,
    height: 40,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  search: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
    flex: 1,
    marginRight: 10,
    color: COLORS.white,
  },
});
