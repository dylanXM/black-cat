import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRef, useState } from 'react';
import Details from './components/details';
import Participants from './components/participants';
import Comments from './components/comments';
import { routes } from './data';

export default function ActivityTab() {
  const [activeKey, setActiveKey] = useState('details');
  const scrollViewRef = useRef<ScrollView>(null);

  const scrollToAnchor = (key: string, y: number) => {
    console.log('scrollToAnchor', scrollViewRef.current?.scrollTo, key, y);
    if (!scrollViewRef.current) {
      return;
    }
    setActiveKey(key);
    scrollViewRef.current.scrollTo({ y: y, animated: true });
  };

  return (
    <>
      <View style={styles.container}>
        {
          routes.map((route, index) => {
            const { key, title, icon, activeIcon, height } = route;
            const isActive = activeKey === key;
            return (
              <View key={key} style={[styles.tab, index !== 0 && { borderLeftWidth: 1 }]}>
                <TouchableOpacity onPress={() => scrollToAnchor(key, height)}>
                  <View style={styles.tabContent}>
                    { isActive ? activeIcon : icon }
                    <Text style={[styles.text, isActive && styles.activeText]}>
                      {title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })
        }
      </View>
      <ScrollView ref={scrollViewRef}>
        <Details />
        <Participants />
        <Comments />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderColor: '#E8E8E8',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  divider: {
    height: 12,
    width: 1,
    backgroundColor: '#E8E8E8',
  },
  tab: {
    height: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    borderColor: '#E8E8E8',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginTop: -2,
    color: '#8C8C8C',
    fontSize: 12,
  },
  activeText: {
    color: '#AECB4F',
  },
});