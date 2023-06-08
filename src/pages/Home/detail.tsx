import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function HomeDetail() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const testGeo = () => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: 'whenInUse',
    });
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      if (info.coords) {
        setLat(info.coords.latitude);
        setLng(info.coords.longitude);
      }
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to TestGeo" onPress={testGeo} />
      <Text>
        经纬度查询：lat --- {lat}; lng --- {lng}{' '}
      </Text>
    </View>
  );
}

export default HomeDetail;
