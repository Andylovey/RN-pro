import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Video from 'react-native-video';

function HomeVideo() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Video
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        controls={true}
        fullscreen={true}
        repeat={true}
      />
    </View>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomeVideo;
