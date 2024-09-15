import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import UserTabBar from './components/user-tab-bar';
import { useEffect, useState } from 'react';
import { routes } from './components/user-tab-bar/data';
import Likes from './components/likes';
import Goings from './components/goings';
import Pasts from './components/pasts';

const renderScene = SceneMap({
  likes: Likes,
  goings: Goings,
  pasts: Pasts,
});

export interface UserTabRoute {
  key: string;
  title: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

export default function UserTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  useEffect(() => setIndex(0), []);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={({ jumpTo }) => <UserTabBar jumpTo={jumpTo} activeKey={index} />}
    />
  );
}