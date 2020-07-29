import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../screens/Preload'

const Stack = createStackNavigator();

export default () => {
    return (
      <NavigationContainer>
          <Stack.Navigator headerMode="none">
              <Stack.Screen name="Preload" component={Preload} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }