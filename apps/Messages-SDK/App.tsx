/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Chat, MessageList} from './src/screens';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
    {
      name: 'MessageList',
      component: MessageList,
      options: {
        headerTitle: 'Chats',
      },
    },
    {
      name: 'Chat',
      component: Chat,
    },
  ];
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Chat">
        {routes.map((route, index) => (
          <Stack.Screen key={index} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
