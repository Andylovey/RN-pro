import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';


function Home({navigation}) {
  

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Video"
        onPress={() => navigation.navigate('Video')}
      />
    </View>
  );
}

export default Home;
