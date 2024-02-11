import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Bookings} from './HomeScreens';

const Drawer = createDrawerNavigator();

export function HomeNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Bookings" component={Bookings} />
    </Drawer.Navigator>
  );
}
