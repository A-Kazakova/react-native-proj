import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../screens/List';

const Stack = createStackNavigator();

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{ title: 'List page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
