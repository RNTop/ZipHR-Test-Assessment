import React from 'react';
import {Text} from 'react-native';
import {MainContainer} from '../../components';

export interface IHomeScreen {}

const HomeScreen = () => {
  return (
    <MainContainer>
      <Text>Top stories</Text>
    </MainContainer>
  );
};

export default HomeScreen;
