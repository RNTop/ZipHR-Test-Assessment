import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText, TouchableOpacity} from '../../../components/styled-components';
import {COLORS} from '../../../constants';
interface IOutlineButton {
  label: string;
  onPress: () => void;
  disabled: boolean;
}

export const OutlineButton = ({disabled, label, onPress}: IOutlineButton) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        {borderColor: disabled ? COLORS.green : COLORS.grey},
      ]}
      onPress={() => {
        onPress();
      }}>
      <AppText color={disabled ? COLORS.green : COLORS.grey}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});
