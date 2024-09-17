import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './drawer';
import Home from './home';
import Profile from './profile';
import { useFetchUser } from './hooks';
import Detail from './detail';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function List() {
  // 获取用户信息
  useFetchUser();

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Drawer.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        {/* 其他屏幕 */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}