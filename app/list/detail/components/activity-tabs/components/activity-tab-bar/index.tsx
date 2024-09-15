import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { routes } from './data';

interface ActivityTabBarProps {
  jumpTo: (key: string) => void;
  activeKey: number;
}

export default function ActivityTabBar({ jumpTo, activeKey }: ActivityTabBarProps) {
  return (
    <View style={styles.container}>
      {
        routes.map((route, index) => {
          const isActive = activeKey === index;
          const { key, title, icon, activeIcon } = route;
          return (
            <View key={key} style={[styles.tab, index !== 0 && { borderLeftWidth: 1 }]}>
              <TouchableOpacity onPress={() => jumpTo(key)}>
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