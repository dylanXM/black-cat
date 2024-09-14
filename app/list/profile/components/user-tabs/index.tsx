import { View, StyleSheet } from 'react-native';



export default function UserTabs() {
  <View style={styles.container}>
    <View>
      
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    borderTopColor: '#E8E8E8',
    borderBottomColor: '#E8E8E8',
    borderWidth: 2,
  },
  tab: {
    fontSize: 16,
    color: '#67616D',
  },
  activeTab: {
    fontSize: 16,
    color: '#8560A9',
  },
});

