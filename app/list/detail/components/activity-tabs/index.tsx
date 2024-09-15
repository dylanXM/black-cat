import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Details from './components/details';
import { useState } from 'react';
import Participants from './components/participants';
import Comments from './components/comments';
import ActivityTabBar from './components/activity-tab-bar';
import { routes } from './components/activity-tab-bar/data';

const renderScene = SceneMap({
  details: Details,
  participants: Participants,
  comments: Comments,
});

export interface ActivityTabRoute {
  key: string;
  title: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}

export default function ActivityTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={({ jumpTo }) => <ActivityTabBar jumpTo={jumpTo} activeKey={index} />}
    />
  );
}