import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screen/home';
import Page2 from '../src/screen/page2';
import Page3 from '../src/screen/page3';

const Stack = createStackNavigator();

const Rota = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Page3"
        component={Page3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Rota;
