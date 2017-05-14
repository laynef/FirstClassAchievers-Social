import React from 'react';
import { Image, View } from 'react-native';

const Thumbnail = ({ image }) => {
  const { view, img } = styles;

  return (
    <View style={view}>
        <Image source={{uri: image}} style={view} />
      </View>
  );
};

const styles = {
  view: {
      width: 75,
      height:75
  },
  img: {
    
  }
};

export { Thumbnail };
