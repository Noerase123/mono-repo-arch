/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeNavigation, MessageList, ChatScreen} from './src/screens';
import {HomeIcon, MessagesIcon} from './src/assets';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  const routes: Array<React.ComponentProps<typeof Tab.Screen>> = [
    {
      name: 'HomeNavigation',
      component: HomeNavigation,
      options: {
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarLabel: 'Home',
        tabBarActiveTintColor: '#00539F',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarIcon: props => {
          return (
            <HomeIcon
              width={props.focused ? '36px' : '28px'}
              height={props.focused ? '36px' : '28px'}
              stroke={props.focused ? '#00539F' : '#A7A7A7'}
            />
          );
        },
      },
    },
    {
      name: 'Messages',
      component: MessageList,
      options: {
        tabBarShowLabel: false,
        // tabBarLabel: 'Messages',
        tabBarActiveTintColor: '#00539F',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarIcon: props => {
          return (
            <MessagesIcon
              width={props.focused ? '36px' : '28px'}
              height={props.focused ? '36px' : '28px'}
              stroke={props.focused ? '#00539F' : '#A7A7A7'}
            />
          );
        },
      },
    },
    {
      name: 'Messages2',
      component: MessageList,
      options: {
        tabBarShowLabel: false,
        // tabBarLabel: 'Messages',
        tabBarActiveTintColor: '#00539F',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarIcon: props => {
          return (
            <MessagesIcon
              width={props.focused ? '36px' : '28px'}
              height={props.focused ? '36px' : '28px'}
              stroke={props.focused ? '#00539F' : '#A7A7A7'}
            />
          );
        },
      },
    },
    {
      name: 'Messages3',
      component: MessageList,
      options: {
        tabBarShowLabel: false,
        // tabBarLabel: 'Messages',
        tabBarActiveTintColor: '#00539F',
        tabBarInactiveTintColor: '#A7A7A7',
        tabBarIcon: props => {
          return (
            <MessagesIcon
              width={props.focused ? '36px' : '28px'}
              height={props.focused ? '36px' : '28px'}
              stroke={props.focused ? '#00539F' : '#A7A7A7'}
            />
          );
        },
      },
    },
  ];

  return (
    <Tab.Navigator initialRouteName="HomeNavigation">
      {routes.map((route, index) => (
        <Tab.Screen key={index} {...route} />
      ))}
    </Tab.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={TabScreens}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
