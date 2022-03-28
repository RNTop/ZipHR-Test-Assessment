import React, {FunctionComponent, useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import FastImage, {ResizeMode} from 'react-native-fast-image';
import {COLORS} from '../constants';
import {CenterView} from './styled-components';

interface IAppFastImage {
  uri?: string;
  imageStyle?: any;
  source?: any;
  defaultSouce?: any;
  resizeMode?: ResizeMode;
}

const AppFastImage: FunctionComponent<IAppFastImage> = ({
  uri,
  source,
  imageStyle,
  defaultSouce = require('../resource/icons/placeholder.png'),
  resizeMode,
}) => {
  const noUrlProvided = !uri && !source;

  const [imageSource, setSource] = useState(
    noUrlProvided ? defaultSouce : (uri && {uri}) || source,
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (uri) {
      setSource({uri});
    } else if (source) {
      setSource(source);
    } else {
      setSource(defaultSouce);
    }
  }, [uri, source, defaultSouce]);
  return (
    <CenterView>
      <FastImage
        source={imageSource}
        style={imageStyle}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        onError={() => {
          setLoading(false);
          setSource(defaultSouce);
        }}
        resizeMode={resizeMode}
      />
      {loading && (
        <ActivityIndicator color={COLORS.white} style={styles.loading} />
      )}
    </CenterView>
  );
};

export default AppFastImage;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
  },
});
