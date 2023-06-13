import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Settings from './src/pages/Settings';
import HomeDetail from './src/pages/Home/detail';
import HomeVideo from './src/pages/Home/video';
import HomeMusic from './src/pages/Home/Music';

function TabScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={HomeDetail} />
        <Stack.Screen name="Video" component={HomeVideo} />
        <Stack.Screen name="Music" component={HomeMusic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
