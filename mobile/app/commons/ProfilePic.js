import React from 'react';
import { Image, View } from 'react-native';

const ProfilePic = ({ image }) => {
  const { view, img } = styles;
  let url = image.replace(/http/ig, 'https')
  return (
    <View style={view}>
        <Image source={{uri: url}} style={img} />
      </View>
  );
};

const styles = {
  view: {
      width: 200,
      height:200,
      marginTop: 10, 
      marginLeft: '25%',
      marginRight: '25%'
  },
  img: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 100
  }
};

export { ProfilePic };
