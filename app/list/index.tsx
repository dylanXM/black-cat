import { IndexProps } from '../index/index';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './drawer';
import Home from './home';
import Profile from './profile';
import { useFetchUser } from './hooks';

const Drawer = createDrawerNavigator();

export default function List({ navigation }: IndexProps) {
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
        {/* 其他屏幕 */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}