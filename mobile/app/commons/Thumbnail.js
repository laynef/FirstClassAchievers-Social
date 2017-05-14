import React from 'react';
import { Image, View } from 'react-native';

const Thumbnail = ({ image }) => {
  const { view, img } = styles;
  let url = image.replace(/http/ig, 'https')
  return (
    <View style={view}>
        <Image source={{uri: url}} style={view} />
      </View>
  );
};

const styles = {
  view: {
      width: 75,
      height:75
  },
  img: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 35
  }
};

export { Thumbnail };
